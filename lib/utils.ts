import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 function prepareForHtml2Canvas(element) {
  // Store original styles
  const originalStyles = new Map();
  
  // Find all elements with unsupported color functions
  const elements = element.querySelectorAll('*');
  elements.forEach(el => {
    const computedStyle = window.getComputedStyle(el);
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;
    
    if (color.includes('color(') || backgroundColor.includes('color(')) {
      // Store original
      originalStyles.set(el, {
        color: el.style.color,
        backgroundColor: el.style.backgroundColor
      });
      
      // Replace with supported colors
      if (color.includes('color(')) {
        el.style.color = 'rgb(128, 128, 128)'; // Fallback
      }
      if (backgroundColor.includes('color(')) {
        el.style.backgroundColor = 'rgb(240, 240, 240)'; // Fallback
      }
    }
  });
  
  return originalStyles;
}

 function restoreStyles(originalStyles) {
  originalStyles.forEach((styles, element) => {
    if (styles.color) element.style.color = styles.color;
    if (styles.backgroundColor) element.style.backgroundColor = styles.backgroundColor;
  });
}




// Simplified PDF export utility that doesn't rely on external libraries
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

    restoreStyles(originalStyles);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Görseli sayfaya sığacak şekilde ölçekle
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

