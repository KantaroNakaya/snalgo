import json
import csv
import os
import glob

# スクリプトのディレクトリパスを取得
script_dir = os.path.dirname(os.path.abspath(__file__))

# JSONディレクトリとCSVディレクトリのパスを設定
json_dir = os.path.join(script_dir, 'json')
csv_dir = os.path.join(script_dir, 'csv')

# CSVディレクトリが存在しない場合は作成
if not os.path.exists(csv_dir):
    os.makedirs(csv_dir)
    print(f'CSVディレクトリを作成しました: {csv_dir}')

# 変換対象のJSONファイルを取得
json_files = glob.glob(os.path.join(json_dir, 'data-*.json'))

# 改行を\nに変換する関数
def convert_newlines(obj):
    if isinstance(obj, str):
        return obj.replace('\n', '\\n')
    elif isinstance(obj, dict):
        return {k: convert_newlines(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [convert_newlines(item) for item in obj]
    return obj

# 各JSONファイルを処理
for json_path in json_files:
    print(f'処理中: {os.path.basename(json_path)}')
    
    # JSONファイルを読み込む
    with open(json_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)
    
    # データの改行を変換
    converted_data = convert_newlines(data)
    
    # CSVファイル名を生成
    csv_filename = os.path.splitext(os.path.basename(json_path))[0] + '.csv'
    csv_path = os.path.join(csv_dir, csv_filename)
    
    # CSVファイルに書き込む
    with open(csv_path, 'w', encoding='utf-8', newline='') as csv_file:
        # CSVのヘッダーを定義
        fieldnames = [
            'contentId', 'language', 'framework', 'title', 'description', 'templateCode',
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
    
    print(f'変換完了: {csv_filename}')

print('全てのJSONファイルのCSV変換が完了しました。') 