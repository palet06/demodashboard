import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 function prepareForHtml2Canvas(element: HTMLElement) {
  
  const originalStyles = new Map();
  
  
  const elements = element.querySelectorAll('*');
  elements.forEach(el => {
    const computedStyle = window.getComputedStyle(el);
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;
    
    if (color.includes('color(') || backgroundColor.includes('color(')) {
      
      originalStyles.set(el, {
        // @ts-expect-error
        color: el.style.color,
        // @ts-expect-error
        backgroundColor: el.style.backgroundColor
      });
      
   
      if (color.includes('color(')) {
        // @ts-expect-error
        el.style.color = 'rgb(128, 128, 128)'; 
      }
      if (backgroundColor.includes('color(')) {
        // @ts-expect-error
        el.style.backgroundColor = 'rgb(240, 240, 240)'; 
      }
    }
  });
  
  return originalStyles;
}

async function restoreStyles(
  originalStyles: Map<Element, { color: string; backgroundColor: string }>
) {
  originalStyles.forEach((styles, element) => {
    // @ts-expect-error
    if (styles.color) element.style.color = styles.color;
    // @ts-expect-error
    if (styles.backgroundColor) element.style.backgroundColor = styles.backgroundColor;
  });
}





export const generatePDF = async (elementId: string, filename = "report.pdf"): Promise<void> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID ${elementId} not found`);
    }



     
     const originalStyles=  prepareForHtml2Canvas(element);
    const canvas = await html2canvas(element, {
    
  
      scale: 2, // daha yüksek çözünürlük
    });

    await restoreStyles(originalStyles);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

   
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return Promise.reject(error);
  }
};

