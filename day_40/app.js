 const merger = async () => {
    const pdf1File = document.getElementById('pdf1').files[0];    //take pdf file in js
    const pdf2File = document.getElementById('pdf2').files[0];

    if (!pdf1File || !pdf2File) {                                  //check 
        alert('Please select both PDF files.');
        return;
    }

    try {
        const pdf1Binary = await pdf1File.arrayBuffer();          //convert pdf into binary . arrayBuffer method of pdf-lib 
        const pdf2Binaary = await pdf2File.arrayBuffer();

        const pdfDoc = await PDFLib.PDFDocument.create();          //create a new pdf 
        
        const pdf1 = await PDFLib.PDFDocument.load(pdf1Binary);      //load binary files
        const pdf2 = await PDFLib.PDFDocument.load(pdf2Binaary);


        const copiedPages1 = await pdfDoc.copyPages(pdf1, pdf1.getPageIndices());  //copy pages of file
        copiedPages1.forEach((page) => pdfDoc.addPage(page));

        const copiedPages2 = await pdfDoc.copyPages(pdf2, pdf2.getPageIndices());
        copiedPages2.forEach((page) => pdfDoc.addPage(page));

        const mergedPdfBytes = await pdfDoc.save();                           //convert in bytes array,to store 

        const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);

        
        const downloadLink = document.getElementById('downloadLink'); 
        downloadLink.href = mergedPdfUrl; 
        downloadLink.download = 'merged.pdf';
        downloadLink.style.display = 'inline';
    } catch (error) {
        console.error('Error merging PDFs:', error);
        alert('An error occurred while merging the PDFs.');
    }
};
