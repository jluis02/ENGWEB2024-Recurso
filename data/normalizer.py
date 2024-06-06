import json
import ast

def fix_author(authors):
    return [author.strip() for author in authors.split(',')]

def fix_list_field(field):
    if isinstance(field, str):
        try:
            return ast.literal_eval(field.replace('"', '\\"').replace("'", '"'))
        except:
            return field
    return field

def clean_dataset(data):
    for book in data:
        if "author" in book:
            book["author"] = fix_author(book["author"])
        
        list_fields = ["genres", "characters", "awards", "ratingsByStars", "setting"]
        for field in list_fields:
            if field in book:
                book[field] = fix_list_field(book[field])
        
        if "bookId" in book:
            book["bookId"] = book["bookId"].replace(" ", "_").replace(".", "_")
    
    return data

def remove_unusual_line_terminators(text):
    return text.replace('\u2028', '').replace('\u2029', '')

def process_json_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    cleaned_data = clean_dataset(data)
    
    json_data = json.dumps(cleaned_data, ensure_ascii=False, indent=4)
    
    clean_json_data = remove_unusual_line_terminators(json_data)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(clean_json_data)

input_file = 'datasetOriginal.json' 
output_file = 'dataset.json'
process_json_file(input_file, output_file)

print("Arquivo JSON corrigido e salvo com sucesso!")