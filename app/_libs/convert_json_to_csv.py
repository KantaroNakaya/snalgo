import json
import csv

# JSONファイルを読み込む
with open('work-data.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# CSVファイルに書き込む
with open('work-data.csv', 'w', encoding='utf-8', newline='') as csv_file:
    # CSVのヘッダーを定義
    fieldnames = [
        'title', 'description', 'templateCode',
        'answer01_code', 'answer01_desc',
        'answer02_code', 'answer02_desc',
        'answer03_code', 'answer03_desc'
    ]
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    
    # ヘッダーを書き込む
    writer.writeheader()
    
    # データを書き込む
    for item in data:
        writer.writerow(item)

print('CSVファイルの変換が完了しました。') 