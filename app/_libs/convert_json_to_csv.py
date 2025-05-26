import json
import csv

# JSONファイルを読み込む
with open('app/_libs/algo_snap_questions.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# CSVファイルに書き込む
with open('questions.csv', 'w', encoding='utf-8', newline='') as csv_file:
    # CSVのヘッダーを定義
    fieldnames = ['title', 'description', 'templateCode', 'answerCode01', 'answerCode02', 'answerCode03']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    
    # ヘッダーを書き込む
    writer.writeheader()
    
    # データを書き込む
    for item in data:
        writer.writerow(item)

print('CSVファイルの変換が完了しました。') 