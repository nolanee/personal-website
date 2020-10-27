import os
import sys
folder = sys.argv[1]
name = "image"
entries = os.listdir(folder)

code = ""
i = 1
for entry in entries:
    code += "export const " + name + str(i) + " = import(\"./" + entry + "\");\n"
    i += 1

f = open(folder + "/index.js", "w")
f.write(code)
f.close()