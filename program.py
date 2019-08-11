# This Python file uses the following encoding: utf-8

import tkinter as tk

class FullScreenApp(object):
    def __init__(self, root, **kwargs):
        w = tk.Label(root, text="SK Retail System", font=("Helvetica", 16))
        w.pack(padx=5, pady=5)
        root.attributes('-fullscreen', True)
        form_layout = tk.Frame(borderwidth=2, relief="groove")
        form_layout.pack(padx=20, pady=20)
        self.create_menu(root)
        self.create_login_form(form_layout)

    def create_menu(self, root):
        def NewFile():
            print ("New File!")
        def OpenFile():
            print('Open File!')
            #name = askopenfilename()
            #print name
        def About():
            print ("This is a simple example of a menu")
        menu = tk.Menu(root)
        root.config(menu=menu)
        filemenu = tk.Menu(menu)
        menu.add_cascade(label="File", menu=filemenu)
        filemenu.add_command(label="New", command=NewFile)
        filemenu.add_command(label="Open...", command=OpenFile)
        filemenu.add_separator()
        filemenu.add_command(label="Exit", command=root.quit)

        helpmenu = tk.Menu(menu)
        menu.add_cascade(label="Help", menu=helpmenu)
        helpmenu.add_command(label="About...", command=About)

    def create_login_form(self, root):
        fields = 'User Name', 'Password'

        def fetch(entries):
            for entry in entries:
                field = entry[0]
                text  = entry[1].get()
                print('%s: "%s"' % (field, text)) 

        def makeform(root, fields):
            
            entries = []
            for field in fields:
                row = tk.Frame(root)
                lab = tk.Label(row, width=10, text=field, anchor='w')
                ent = tk.Entry(row)
                if(field == "Password"):
                    ent.config(show="*")
                
                row.pack(padx=5, pady=5)
                lab.pack(side=tk.LEFT)
                ent.pack(side=tk.LEFT, expand=tk.NO, fill=tk.X)
                
                entries.append((field, ent))
            return entries

        ents = makeform(root, fields)
        root.bind("<Button-1>", (lambda event, e=ents: fetch(e)))   
        row = tk.Frame(root)
        b1 = tk.Button(row, text='Login',
                      command=(lambda e=ents: fetch(e)), width=10)
        b1.pack(side=tk.LEFT, padx=5, pady=5)

        b2 = tk.Button(row, text='Exit', command=root.quit, width=10)
        b2.pack(side=tk.LEFT, padx=5, pady=5)
        row.pack(padx=10, pady=10)

root=tk.Tk()
app=FullScreenApp(root)
root.mainloop()