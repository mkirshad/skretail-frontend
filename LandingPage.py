# This Python file uses the following encoding: utf-8

import tkinter as tk
import requests

class LandingPage(object):
    urls = {'api_login':'http://127.0.0.1:8000/api/login'}

    def __init__(self, root, data):
        self.root = root
        self.token = data['token']

        self.root_frame = tk.Frame(self.root)
        self.root_frame.pack()

        w = tk.Label(self.root_frame, text="SK Retail System Screen 2", font=("Helvetica", 16))
        w.pack(padx=5, pady=5)
        form_layout = tk.Frame(self.root_frame, borderwidth=2, relief="groove")
        form_layout.pack(padx=20, pady=20)
        self.create_menu(self.root)
        self.create_login_form(form_layout)

    def create_menu(self, root):
        def open_admin_site():
            chromedir= 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
            webbrowser.get(chromedir).open("http://127.0.0.1:8000/admin/")
        def open_bi():
            chromedir= 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
            webbrowser.get(chromedir).open("http://127.0.0.1:8000/")
        def about():
            print ("This is a simple example of a menu")
            showinfo('About...', """ 
            This is V 1.0 Point Of Sale of SK Retail System.
            It is a retail system for retail dealers/shops.
            For inquiries contact:
            sales@skstrategicsoft.com
            """)

        menu = tk.Menu(root)
        root.config(menu=menu)
        filemenu = tk.Menu(menu)
        menu.add_cascade(label="File", menu=filemenu)
        filemenu.add_command(label="Admin Site", command=open_admin_site)
        filemenu.add_command(label="Business Intelligence", command=open_bi)
        filemenu.add_separator()
        filemenu.add_command(label="Exit", command=root.quit)

        helpmenu = tk.Menu(menu)
        menu.add_cascade(label="Help", menu=helpmenu)
        helpmenu.add_command(label="About...", command=about)

    def create_login_form(self, root):
        fields = 'User Name', 'Password'

        def do_login(entries, msg):
            username = ''
            password = ''
            for entry in entries:
                if(entry[0] == fields[0]):
                    username = entry[1].get()

                if(entry[0] == fields[1]):
                    password = entry[1].get()
            # make post request
            data = {'username':username, 'password':password} 
            r = requests.post(url=FullScreenApp.urls['api_login'], data=data, )
            r_json = r.json()
            try:
                error = r_json['error']
                lab_msg.config(text=error)
            except:
                try:
                    FullScreenApp.token = r_json['token']
                    lab_msg.config(text='Logged in!')
                except Exception as e:
                    lab_msg.config(text=e)            

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
        row_msg = tk.Frame(root)
        lab_msg = tk.Label(row_msg, text='', fg='red', anchor='w')
        row_msg.pack()
        lab_msg.pack()
        

        row = tk.Frame(root)
        b1 = tk.Button(row, text='Login',
                      command=(lambda e=ents, msg =lab_msg : do_login(e, msg)), width=10)
        b1.pack(side=tk.LEFT, padx=5, pady=5)

        b2 = tk.Button(row, text='Exit', command=root.quit, width=10)
        b2.pack(side=tk.LEFT, padx=5, pady=5)
        row.pack(padx=10, pady=10)