"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, StickyNote, Calendar, Edit, Trash2 } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  priority: "normal" | "important";
  createdAt: string;
  updatedAt: string;
}

const priorityColors = {
  normal: "bg-blue-500",
  important: "bg-red-500",
};

export default function Notlar() {
    const pathname = usePathname();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    priority: "normal" as "normal" | "important",
  });

  useEffect(() => {
    const savedNotes = localStorage.getItem("dashboard-notes");
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error("Error loading notes from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboard-notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (!formData.title.trim() || !formData.content.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      content: formData.content.trim(),
      priority: formData.priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNotes((prev) => [newNote, ...prev]);
    setFormData({ title: "", content: "", priority: "normal" });
    setIsAddDialogOpen(false);
  };

  const handleEditNote = () => {
    if (!selectedNote || !formData.title.trim() || !formData.content.trim())
      return;

    const updatedNote: Note = {
      ...selectedNote,
      title: formData.title.trim(),
      content: formData.content.trim(),
      priority: formData.priority,
      updatedAt: new Date().toISOString(),
    };

    setNotes((prev) =>
      prev.map((note) => (note.id === selectedNote.id ? updatedNote : note))
    );
    setFormData({ title: "", content: "", priority: "normal" });
    setIsEditDialogOpen(false);
    setIsDetailDialogOpen(false);
    setSelectedNote(null);
  };

  const handleDeleteNote = () => {
    if (!selectedNote) return;

    setNotes((prev) => prev.filter((note) => note.id !== selectedNote.id));
    setIsDeleteDialogOpen(false);
    setIsDetailDialogOpen(false);
    setSelectedNote(null);
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setIsDetailDialogOpen(true);
  };

  const handleEditClick = (note: Note) => {
    setSelectedNote(note);
    setFormData({
      title: note.title,
      content: note.content,
      priority: note.priority,
    });
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = (note: Note) => {
    setSelectedNote(note);
    setIsDeleteDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Az önce";
    if (diffInHours < 24) return `${diffInHours} saat önce`;
    if (diffInHours < 48) return "Dün";
    return date.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
  };

  const standartYukseklik = "h-[340px]" 
  return (
    <div className={`bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23] ${pathname ==="/uzman-v2"?'h-full':standartYukseklik}
  flex flex-col shadow-sm`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Notlarım
        </h3>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <button className="p-2 bg-green-200 hover:bg-green-300 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Plus className="h-5 w-5  text-gray-600 dark:text-gray-400" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Yeni Not Ekle</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Not Başlığı
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Not başlığını girin..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Not İçeriği
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Not içeriğini girin..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Önem Durumu
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      priority: e.target.value as "normal" | "important",
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="normal">Normal</option>
                  <option value="important">Önemli</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={handleAddNote}
                  disabled={!formData.title.trim() || !formData.content.trim()}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Kaydet
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                  className="flex-1"
                >
                  İptal
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col justify-between h-full overflow-y-auto">
        <div className="space-y-3  flex flex-col w-full  h-full">
        {notes.length === 0 ? (
          <div className="text-center py-8 flex flex-col h-full items-center justify-center">
            <StickyNote className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400">
              Henüz not eklenmemiş
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              İlk notunuzu eklemek için + butonuna tıklayın
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              onClick={() => handleNoteClick(note)}
              className="flex items-start justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer group"
            >
              <div className="flex items-start space-x-3 flex-1 min-w-0">
                <div
                  className={`w-3 h-3 rounded-full ${
                    priorityColors[note.priority]
                  } flex-shrink-0 mt-1.5`}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {note.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                    {note.content}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                <div className="text-right">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(note.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {notes.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Toplam Not</span>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">
                Önemli: {notes.filter((n) => n.priority === "important").length}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {notes.length}
              </span>
            </div>
          </div>
        </div>
      )}
        

      </div>

      

      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          {selectedNote && (
            <>
              <DialogHeader className="pr-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      priorityColors[selectedNote.priority]
                    }`}
                  />
                  <DialogTitle className="flex-1">
                    {selectedNote.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Not İçeriği
                  </h4>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg max-h-[25rem] overflow-y-auto ">
                    <p className="text-sm text-gray-900 dark:text-white  w-full whitespace-pre-wrap wrap-anywhere ">
                      {selectedNote.content}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => handleEditClick(selectedNote)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Düzenle
                  </Button>
                  <Button
                    onClick={() => handleDeleteClick(selectedNote)}
                    variant="outline"
                    size="sm"
                    className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Sil
                  </Button>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span>
                    Oluşturulma:{" "}
                    {new Date(selectedNote.createdAt).toLocaleString("tr-TR")}
                  </span>
                  {selectedNote.updatedAt !== selectedNote.createdAt && (
                    <span>
                      Güncelleme:{" "}
                      {new Date(selectedNote.updatedAt).toLocaleString("tr-TR")}
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Notu Düzenle</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Not Başlığı
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Not başlığını girin..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Not İçeriği
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Not içeriğini girin..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Önem Durumu
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    priority: e.target.value as "normal" | "important",
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="normal">Normal</option>
                <option value="important">Önemli</option>
              </select>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                onClick={handleEditNote}
                disabled={!formData.title.trim() || !formData.content.trim()}
                className="flex-1"
              >
                Güncelle
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
                className="flex-1"
              >
                İptal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Notu Sil</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "{selectedNote?.title}" başlıklı notu silmek istediğinizden emin
              misiniz? Bu işlem geri alınamaz.
            </p>
            <div className="flex gap-2 pt-4">
              <Button
                onClick={handleDeleteNote}
                variant="destructive"
                className="flex-1"
              >
                Sil
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsDeleteDialogOpen(false)}
                className="flex-1"
              >
                İptal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    
    </div>
  );
}
