import re
import os

def remove_words_starting_with_dark(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = file.read()

    # Regular expression to match words starting with "dark:" followed by a space or quote
    regex = r'\bdark:[^\s"\'<>]*["\'<>]?\b'
    
    # Replace occurrences of the matched words without changing alignment
    modified_data = re.sub(regex, '', data)
    
    # Save the modified content to a new file
    directory, filename = os.path.split(file_path)
    name, ext = os.path.splitext(filename)
    new_file_path = os.path.join(directory, f"{name}_processed{ext}")

    with open(new_file_path, 'w', encoding='utf-8') as file:
        file.write(modified_data)

    print(f"Successfully removed words starting with 'dark:' from {file_path}")
    print(f"Processed file saved to {new_file_path}")

# Example usage:
file_path = 'hero-2.tsx'
remove_words_starting_with_dark(file_path)
