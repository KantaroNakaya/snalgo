import json
import csv

# JSONファイルを読み込む
with open('work-data.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# 改行を\nに変換する関数
def convert_newlines(obj):
    if isinstance(obj, str):
        return obj.replace('\n', '\\n')
    elif isinstance(obj, dict):
        return {k: convert_newlines(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [convert_newlines(item) for item in obj]
    return obj

# データの改行を変換
converted_data = convert_newlines(data)

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
    for item in converted_data:
        writer.writerow(item)

print('CSVファイルの変換が完了しました。') 