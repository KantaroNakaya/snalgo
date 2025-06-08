import json
import csv
import os

# スクリプトのディレクトリパスを取得
script_dir = os.path.dirname(os.path.abspath(__file__))

# JSONファイルを読み込む
json_path = os.path.join(script_dir, 'work-data.json')
with open(json_path, 'r', encoding='utf-8') as json_file:
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
csv_path = os.path.join(script_dir, 'work-data.csv')
with open(csv_path, 'w', encoding='utf-8', newline='') as csv_file:
    # CSVのヘッダーを定義
    fieldnames = [
        'title', 'description', 'templateCode',
        'answer01_code', 'answer01_hint', 'answer01_desc',
        'answer02_code', 'answer02_hint', 'answer02_desc',
        'answer03_code', 'answer03_hint', 'answer03_desc'
    ]
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    
    # ヘッダーを書き込む
    writer.writeheader()
    
    # データを書き込む
    for item in converted_data:
        writer.writerow(item)

print('CSVファイルの変換が完了しました。') 