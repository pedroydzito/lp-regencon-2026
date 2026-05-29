import PyPDF2
import sys

def extract_to_file(pdf_path, out_file):
    try:
        reader = PyPDF2.PdfReader(pdf_path)
        out_file.write(f"\n--- {pdf_path} ---\n")
        for page in reader.pages:
            text = page.extract_text()
            if text:
                out_file.write(text + "\n")
    except Exception as e:
        out_file.write(f"Error reading {pdf_path}: {e}\n")

with open('extracted_texts.md', 'w', encoding='utf-8') as f:
    extract_to_file('refs/files/copy.pdf', f)
    extract_to_file('refs/files/infos.pdf', f)
