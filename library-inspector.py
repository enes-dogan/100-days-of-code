import requests
from bs4 import BeautifulSoup
import time


def readFatihLibraries():
    fatih_lib_url = 'http://fatihteyasa.com'

    response = requests.get(fatih_lib_url)

    if response.status_code == 200:
        print("Successfully opened the web page:")

        soup = BeautifulSoup(response.text, 'html.parser')

        library_database_dict = dict()
        fatih_available_seat = 0
        topkapi_available_seat = 0
        for library_card in soup.find_all("div", {"class": "col-sm-6 pr-sm-2 my-3"}):
            cardlist = []
            available_seat = 0
            is_assigned = False
            for index, library in enumerate(library_card.find_all("b")):
                cardlist.append(library.text)
                if library.text == "Boş" and not is_assigned:
                    available_seat = library_card.find_all("b")[index + 1].text
                    is_assigned = True
            if cardlist[0] == "Fatih Merkez Kütüphanesi" or cardlist[0] == "Topkapı Kütüphanesi":
                library_database_dict[cardlist[0]] = cardlist[1:]
                if cardlist[0] == "Fatih Merkez Kütüphanesi":
                    fatih_available_seat = int(available_seat)
                if cardlist[0] == "Topkapı Kütüphanesi":
                    topkapi_available_seat = int(available_seat)
        # print(library_database_dict)
        print("-------------------------------------------------")

        if fatih_available_seat > 5:
            print("Fatih Merkez Kütüphanesi'nde boş yer var. Hemen git! Bos koltuk sayisi: ",
                  fatih_available_seat)
        if topkapi_available_seat > 5:
            print("Topkapı Kütüphanesi'nde boş yer var. Hemen git! Bos koltuk sayisi: ",
                  topkapi_available_seat)
    else:
        print("Could not open the web page")


while True:
    readFatihLibraries()
    time.sleep(3)
