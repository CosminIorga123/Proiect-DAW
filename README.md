# Proiect React - Pagina de prezentare a unei echipe de fotbal
Acest proiect reprezinta o aplicatie web realizata in React, ce constituie o pagina de prezentare a unei echipe de fotbal, cu diverse functionalitati specifice. Proiectul este modular, utilizand componente reutilizabile si stiluri CSS personalizate. Scopul paginii este crearea unei experiente interactive pentru utilizatori, oferind o prezentare atractiva a echipei.

## Functionalitati:
1. **Meniu de navigare** in header-ul paginii, ce permite comutarea intre paginile proiectului
2. **Pagina principala** - contine un carusel de imagini si texte definitorii pentru echipa prezentata
3. **Prezentarea echipei** - carduri cu informatiile jucatorilor
4. **Pagina de meciuri** - apeleaza un API pentru determinarea rezultatelor recente si/sau informatiilor despre meciurile viitoare
5. **Pagina de contact** - un form cu validari simple ce simuleaza trimiterea unui mesaj de la utilizator catre administratorii site-ului
6. **Pagina de stiri** - apeleaza un API pentru obtinerea stirilor relevante referitoare la echipa prezentata

## Instructiuni de rulare:
1. Clonarea repository-ului:
   ```bash
   git clone <link-repository>
2. Instalarea dependintelor necesare utilizand in terminal comanda:
   ```bash
   npm install
3. Generarea de API keys gratuite:
   - Accesarea [https://newsapi.org](https://newsapi.org) pentru a obtine cheia necesara accesarii stirilor.
   - Accesarea [https://serpapi.com](https://serpapi.com) pentru a obtine cheia necesara accesarii datelor despre meciuri.

   Salvarea aceste chei intr-un fisier separat, in radacina proiectului, pentru a fi utilizate in componentele relevante.

4. Rularea proiectului:
   ```bash
   npm start
