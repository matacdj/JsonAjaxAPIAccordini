
# Progetto AJAX JSON
### Matteo Accordini

Questa applicazione è in grado di mostrare tramite l'API di Giphy delle immagini GIF in sequenza premendo un pulsante

## Funzionamento JS

Per fare funzionare l'API ho dovuto registrarmi sul sito [Giphy Developers](https://developers.giphy.com/) così da poter ottenere una API KEY, necessaria per poter usufruire dell'API di Giphy

La query che utilizzo nel codice per la ricerca delle immagini GIF con nel nome *laptop* è questa:
```
http://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=laptop
```

## Upload con GIT su GitHub

Per caricare il repository su GitHub ho:

 1. Clonato il repository vuoto da GitHub
 2. Ho aggiunto i file all'indice del repository GIT
 3. Ho fatto il commit di tutti i file con il messaggio *upload progetto*
 4. Ho fatto il push al branch *master*

I comandi che ho utilizzato sono questi:

```
matte@DESKTOP-MATACDJ MINGW64 /f/develop/projects
$ git clone https://github.com/matacdj/JsonAjaxAPIAccordini.git
```
```
matte@DESKTOP-MATACDJ MINGW64 /f/develop/projects/JsonAjaxAPIAccordini (master) 
$ git add *
```
```
matte@DESKTOP-MATACDJ MINGW64 /f/develop/projects/JsonAjaxAPIAccordini (master)
$ git commit -m "upload progetto"
```
```
matte@DESKTOP-MATACDJ MINGW64 /f/develop/projects/JsonAjaxAPIAccordini (master)
$ git push -u origin
```

------------------------------
Copyright (C)  2021 Matteo Accordini
![](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)
