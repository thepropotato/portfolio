from pyscript import document

def color_text(text, color):
    colors = {
        'black': '#000000',
        'red': '#FF0000',
        'green': '#00FF00',
        'yellow': '#FFFF00',
        'blue': '#0000FF',
        'magenta': '#FF00FF',
        'cyan': '#00FFFF',
        'white': '#FFFFFF',
    }
    return f'<span style="color: {colors[color.lower()]}">{text}</span>'

def throwerror(word):
    text = f"{word} : The term '{word}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again."
    output = color_text(text, "red")
    return output

def getdesc():
    name = "Venu Pulagam"
    colored = color_text(name, "yellow")
    desc = f"Hi there! Glad to see you here. I'm {colored}, a dedicated Software Development Engineer driven by a passion for devising refined solutions to intricate challenges. Equipped with a robust background in computer science and a penchant for inventive coding techniques, I excel in environments that prioritize ingenuity and teamwork. My portfolio encompasses diverse project domains, spanning from Machine Learning to Web Design, Cybersecurity to Database Management. Through hands-on project experiences, I've honed my expertise and am now poised for new career opportunities."
    return desc

def gettech():
    tech = ["Machine Learning", "Deep Learning",
            "Transfer Learning", "LLMs", "SpotiPy",
            "Apache Spark", "Tkinter", "Object Oriented Programming",
            "Amazon Boto3", "Youtube V3", "FlutterFlow."]
    
    output =""

    for _ in tech:
        output += f">> {_}<br>"
    
    return output

def getlang():
    lang = ["Java", "Python", "C/C++", "HTML", "Scala", "Matlab"]
    output = ""

    for _ in lang:
        output += f">> {_}<br>"
    
    return output

def getothers():
    others = ["MySQL", "NoSQL", "MongoDB", "Ubuntu/Linux", "Windows", "Markdown", "Git", "Scratch", "PicsArt", "Adobe Illustrator", "PhotoShop"]
    output = ""

    for _ in others:
        output += f">> {_}<br>"
    
    return output

def gethelp():
    table = ["+---------------+--------------------------------+",
        "| Command &nbsp&nbsp&nbsp&nbsp&nbsp | Operation &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp |",
        "+===============+================================+",
        "| sudo get desc | View my description &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp |",
        "+---------------+--------------------------------+",
        "| sudo get tech | View my techstack &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp |",
        "+---------------+--------------------------------+",
        "| sudo get lang | View my knowledge of languages |",
        "+---------------+--------------------------------+",
        "| sudo get gene | View my generalist knowledge &nbsp |",
        "+---------------+--------------------------------+",
        "| sudo get help | Get help (view valid commands) |",
        "+---------------+--------------------------------+"]
    
    output = ""
    for row in table:
        output += f'{row}<br>'
    return output

def about(event):
    input_text = document.querySelector("#input")
    input = input_text.value

    if input == "sudo get desc":
        output = getdesc()
    elif input == "sudo get tech":
        output = gettech()
    elif input == "sudo get lang":
        output = getlang()
    elif input == "sudo get gene":
        output = getothers()
    elif input == "sudo get help":
        output = gethelp()
    else:
        output = throwerror(input)

    output_div = document.querySelector("#output")
    output_div.innerHTML += f'<br><br><span style="color:rgba(255, 255, 255, 0.75)">PS portfolio:\\venupulagam > </span>{input}<br>{output}'

# Registering event listener
document.querySelector("#input").addEventListener("keypress", lambda event: about(event))
