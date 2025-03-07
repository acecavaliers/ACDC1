<template>
  <main>
    <div class="flex justify-end mt-4">
      <button
        @click="printDocument"
        class="px-4 py-2 bg-blue-500 text-white font-bold rounded shadow"
      >
        Print
      </button>
    </div>
    <div class="flex justify-end px-5">
      <button
        @click="downloadDocument"
        class="px-4 py-2 bg-gray-700 text-white font-bold rounded shadow"
      >
        Download CV
      </button>
    </div>
  </main>
</template>

<script setup>
import { jsPDF } from "jspdf";
definePageMeta({
  layout: "default",
});
const printDocument = () => {
  const printContent = document.getElementById("printable-area").innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
};
// Define the downloadDocument function (this will download the content as a PDF)
const downloadDocument = () => {
  const printContent = document.getElementById("printable-area").innerHTML;

  // Create a PDF instance with the specified page size (8.5 x 13 inches)
  const doc = new jsPDF({
    unit: "mm", // The unit of measurement (millimeters)
    format: [215.9, 330.2], // Page size: 8.5 x 13 inches in mm (8.5 * 25.4, 13 * 25.4)
  });

  // Add the HTML content to the PDF and scale it to fit the page
  doc.html(printContent, {
    callback: function (doc) {
      // Save the generated PDF
      doc.save("document.pdf");
    },
    x: 0, // Horizontal margin (in mm)
    y: 0, // Vertical margin (in mm)
    width: 215.9, // Maximum width (8.5 inches in mm)
    windowWidth: 800, // Width of the window in pixels (for scaling content)
  });
};
</script>
