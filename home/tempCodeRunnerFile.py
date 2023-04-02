ata.csv', 'w',newline='') as csvfile:
    fileds = ['symbol', 'name', 'currency', 'exchange', 'mic_code', 'country', 'type']
    writer = csv.DictWriter(csvfile, fieldnames=fileds)
    writer.writeheader()

    for row in response['data']:
        writer.writerow(row)