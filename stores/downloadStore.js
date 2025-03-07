// stores/downloadStore.js
import { defineStore } from 'pinia';
import { jsPDF } from "jspdf";
export const useDownloadStore = defineStore('download', {
  actions: {
    triggerDownload() {
      const printContent = document.getElementById("printable-area").innerHTML;

      const doc = new jsPDF({
        unit: "mm",
        format: [215.9, 330.2],
      });

      doc.html(printContent, {
        callback: function (doc) {
          doc.save("CV.pdf");
        },
        x: 0,
        y: 0,
        width: 215.9,
        windowWidth: 800,
      });
    },
    triggerPrint() {
        const printContent = document.getElementById("printable-area").innerHTML;
  
        // Create a new window to print the content with styles
        const printWindow = window.open('', '', 'height=780,width=1200');
        
        // Add the styles to the new window
        const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
        let styleContent = '';
        styles.forEach(style => {
          if (style.tagName === 'STYLE') {
            styleContent += style.outerHTML;
          } else if (style.tagName === 'LINK') {
            const href = style.getAttribute('href');
            styleContent += `<link rel="stylesheet" href="${href}">`;
          }
        });
  
        printWindow.document.write('<html><head><title>Print CV</title>');
        printWindow.document.write(styleContent);  // Add styles here
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);  // Add the content here
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      },
  }
});
