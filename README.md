# README.md for MTG Squire

## Group Information

### Group Members

* **Calvin Lee**
  * ECS Username: leecalv
  * Student ID: 300445806
* **Matthew Butterfield**
  * ECS Username: buttermatt
  * Student ID: 300443568

## Required Libraries to Run

* npm install @types/uuid --save
* npm install axios

---

## Components

**Calvin Lee**

1. General - FooterTabs
2. General - Header
3. General - ManaCost
4. General - SearchBar
5. General - SideBar
6. General - DataManagers (ScryFall)
7. ResultsDisplay - GeneralInformationCards
8. ResultsDisplay - LegalitiesCards
9. ResultsDisplay - MiscInformationCards
10. ResultsDisplay - PricingCards
11. ResultsDisplay - SingleOtherPrinting
12. ResultsDisplay - StarCityGames (functions that return components to render)
13. SearchResult - SingleSearchResult
14. SearchHistory - SingleSearchHistoryResult

**Matthew Butterfield**

15. LifeTotal - LifeTotalOnePlayer
16. LifeTotal - LifeTotalTwoPlayer
17. LifeTotal - LifeTotalThreePlayer
18. LifeTotal - LifeTotalFourPlayer
19. LifeTotal - LifeTotalLeaveButton
20. LifeTotal - FirstScreenButton
21. LifeTotal - SecondScreenButton
22. LifeTotal - SubScreenButton
23. Dice - DiceDisplayCard
24. Dice - DiceComponent
25. Help - HelpCard

---

## Pages

**Calvin Lee**

1. Quick Search
2. Advanced Search
3. Search Results
4. Results Display
5. Search History

**Matthew Butterfield**

6. Dice
7. Life Counter Setup
8. Life Counter
9. Settings
10. Help

---

## External Assets

**Calvin Lee**

1. Scryfall API: https://scryfall.com/docs/api

ScryFall API allows us to gather verbose information about any card, provide links to card images, and additional rulings.

**Matthew Butterfield**

2. European Central Bank API: https://exchangeratesapi.io/

European Central Bank API allows us to convert prices we obtain through any means to any currency we wish to better support different regions.
