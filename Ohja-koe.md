# Ohjelmoinnin jatkokurssi

- 10.9.2014
    - Koe 
    - Mallivastaukset

# Ohjeita kokeeseen

Koe sisältää useita pieniä ohjelmointitehtäviä. Tehtävät ovat samantyyppisiä kuin mitä harjoitustehtävissä on harjoiteltu. Valitettavasti ohjelmointi täytyy nyt tehdä paperille.

## Mitä ei tarvitse muistaa ulkoa

Koepaperissa annetaan valmiiksi "pääohjelmarunko", eli sitä ei tarvitse osata ulkoa:

```java
import java.util.Scanner;

public class KoeOhjelma {
    
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        int luku = Integer.parseInt( lukija.nextLine() );        
        String merkkijono = lukija.nextLine();       
    }
}
```

Lisäksi jos tehtävässä tarvitaan ArrayList-, HashSet-, HashMap- tai Random-luokkia, niiden metodien kuvaukset annetaan. Myöskään tiedostoon kirjoittamiseen tarvittavien komentojen tarkkaa muotoa ei tarvitse muistaa.

Paperiohjelmoinnissa ollaan myös hiukan armollisempia esim. puolipisteiden ja muiden pienten unohdusten suhteen.

## Kokeen ohjelmointitehtävien kannalta keskeisimmät aiheet

Kokeen kannalta kurssin kaikki viikot ovat tärkeitä. **Graafisiin käyttöliittymiin liittyvää ohjelmointitehtävää kokeissa ei ole. Ohjelmointitehtäviä ei myöskään tule säännöllisistä lausekkeista.**

Erityinen huomio kannattaa kokeeseen kertauksessa ohjelmointitehtäviä silmälläpitäen kiinnittää seuraaviin aiheisiin:

- Javan valmiit luokat: HashMap, ArrayList
- rajapinnat
- valmiit rajapinnat: Comparable, List, Map ym
- perintä, abstraktit luokat
- tiedoston lukeminen
- poikkeukset

## Termejä ja käsitteitä

Keskeinen käsitteistö on kokeessa syytä hallita. Kertaa materiaalia lukiessasi ainakin seuraavat käsitteet, niiden merkitys sekä se, miten ne kooditasolla ilmenevät:

- alkeistyyppi/viittaustyyppi
- static/ei-static
- näkyvyys: public, private, protected, pakkausnäkyvyys
- rajapinta
- comparable
- equals (tarve ja metodin toiminnan periaate)
- hashCode (tarve ja muodostamisen periaate)
- periytyminen
- yläluokka-aliluokka
- super
- this
- metodin korvaaminen
- abstrakti metodi
- abstrakti luokka
- polymorfismi
- kuormittaminen (ohjelmoinnin perusteissa)
- poikkeus
- graafisen käyttöliittymän sisältävät ohjelmien periaatteet (mistä käyttöliittymät koostuvat, tapahtumien käsittely)

## Vanhoja kokeita

Linkkejä vanhoihin Ohjelmoinnin jatkokurssin kokeisiin

- [Kevät 2014](http://www.cs.helsinki.fi/group/java/k14/ohja/koe280414.pdf)
- [Syksy 2013](http://www.cs.helsinki.fi/group/java/k14/ohja/koe091213.pdf)
- [Kevät 2013](http://www.cs.helsinki.fi/group/java/k14/ohja/koe290413.pdf)
