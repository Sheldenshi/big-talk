import json



def add_to_cards(file_dir):
	file = open('cards.json')
	data = json.load(file)
	cards = data['cards']



	seen = set()
	for card in cards:
		seen.add(card['question'])


	next_id = len(cards) + 1
	questions = open(file_dir, 'r')

	while True:
		line = questions.readline()
		if not line:
			break
		line = line.strip()
		if not line in seen:
			print(f"add: {line}")
			seen.add(line)

			new_card = {"id": next_id, "question": line}
			cards.append(new_card)
			next_id += 1
	questions.close()
	data['cards'] = cards
	with open('cards.json', 'w') as json_file:
  		json.dump(data, json_file)

add_to_cards('questions.txt')