import json
import csv

# Recuperar o arquivo books
def retrieve_books(file):
    return json.load(file)

# Calcular quantidade de livros por categoria
def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

    return categories

# Calcular percentual de livros
def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]

# Escrever csv
def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)

if __name__ == '__main__':
    # retrieve books
    with open('arquivo.json') as file:
        books = retrieve_books(file)
    
    #count by category
    book_count_by_category = count_books_by_categories(books)
    
    #calculate percentage
    total_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(book_count_by_category, total_books)

    # write csv
    with open('report.csv', 'w') as file:
        header = ['categoria', 'porcentagem']
        write_csv_report(file, header, books_percentage_rows)