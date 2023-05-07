import re

# Define the string to be replaced
string_to_replace = "CJ_SMOKE-TW7"

# Define the filename and open the file
filename = "linux.txt"
with open(filename, "r", encoding='utf-8') as f:
    text = f.read()

# Replace the string with the question number and count in sequence
count = 1
def replace_string(match):
    global count
    replaced_string = f"Question {count}: {match.group(0)} ({count})"
    count += 1
    return replaced_string
updated_text = re.sub(string_to_replace, replace_string, text)

# Save the updated file
with open(filename, "w") as f:
    f.write(updated_text)
