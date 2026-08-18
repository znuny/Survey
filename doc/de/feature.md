# Funktionalität

Dieses Modul ermöglicht das Erstellen neuer Umfragen, das Hinzufügen von Fragen zu einer erstellten Umfrage, das Freischalten einer Umfrage zum Versand von Anfragen, die begrenzte Bearbeitung bestehender Umfragen sowie die Anzeige von Statistiken zu eingereichten Umfrageantworten und der Antworten selbst.

## Copyright
Dieser Text enthält vollständige oder teilweise Textpassagen, die von der OTRS AG erstellt wurden. Das Copyright an diesen Passagen liegt daher bei der OTRS AG.

# Verwendung

## Neue Umfrage erstellen

Mit dieser Funktion können Znuny-Benutzer neue Umfragen erstellen, indem sie im Menü „UMFRAGE“ den Eintrag „Neu“ wählen.

Neue Umfragen benötigen einen Titel, einen Einleitungstext, eine Absender-E-Mail-Adresse, einen E-Mail-Betreff, einen E-Mail-Text und eine interne Beschreibung der Umfrage.

Zusätzlich kann die neue Umfrage nur für bestimmte Queues, Ticket-Typen oder Services erstellt werden. Ist nichts ausgewählt, gilt sie für jede Queue, jeden Ticket-Typ und jeden Service. Standardmäßig ist die Prüfung der Versandbedingungen für Ticket-Typen oder Services deaktiviert. Die Felder werden daher in der Maske nicht angezeigt (Neu- und Bearbeiten-Maske einer Umfrage).

Es ist auch möglich, Bedingungen anhand von Kundenbenutzer-Attributen zu definieren, z. B. dass alle Kundenbenutzer mit einem bestimmten Kommentar keine Umfrage-E-Mails erhalten. Die Attribute sind in den Masken „AgentSurveyAdd“ und „AgentSurveyEdit“ auswählbar. Jedes Attribut kann mindestens eine Bedingung haben. Eine Bedingung enthält einen Checkbox-Wert für die Negation und ein Wertefeld (Eingabetyp Text oder Mehrfachauswahl).

## Fragen hinzufügen

Sobald eine neue Umfrage erstellt ist, kann der Benutzer Fragen zu dieser Umfrage hinzufügen, indem er in der angezeigten Umfrage auf „Fragen bearbeiten“ klickt.

Es öffnet sich ein neues Fenster. Dort können Fragen hinzugefügt werden.

Fünf Fragetypen sind auswählbar:

„Ja/Nein“-Fragen beantwortet der Benutzer durch Auswahl von „Ja“ oder „Nein“ in einer Dropdown-Liste.

„Optionsfeld (Liste)“-Fragen beantwortet der Benutzer durch Auswahl genau einer der möglichen Antworten.

„Kontrollkästchen (Liste)“-Fragen beantwortet der Benutzer durch Auswahl von keiner bis aller gelisteten Antworten.

„Textarea“-Fragen beantwortet der Benutzer durch Eingabe von Freitext.

„Net Promoter Punktzahl“-Fragen beantwortet der Benutzer durch Auswahl genau einer der möglichen Punktzahlen.

Für jeden Antworttyp kann der Znuny-Benutzer festlegen, ob der Kunde die Frage beantworten muss oder sie überspringen darf.

Sobald Fragen vom Typ „Optionsfeld (Liste)“, „Kontrollkästchen (Liste)“ oder „Net Promoter Punktzahl“ hinzugefügt wurden, erscheint die Frage in der Liste „Umfrage-Fragen“. Durch Klick auf die Frage können Antworten hinzugefügt, die Reihenfolge der Antworten über die Icons „HOCH“ oder „RUNTER“ geändert oder die Antwort über das Icon „LÖSCHEN“ entfernt werden.

Fragen vom Typ „Optionsfeld (Liste)“ und „Net Promoter Punktzahl“ benötigen mindestens zwei Antworten, um gültig zu sein. Fragen vom Typ „Kontrollkästchen (Liste)“ benötigen mindestens eine Antwort, um gültig zu sein.

## Versand von Umfrage-Anfragen starten

Wenn der Znuny-Benutzer das Hinzufügen oder Ändern von Fragen und möglichen Antworten abgeschlossen hat, kann er den Bereich „Fragen bearbeiten“ über „Dieses Fenster schließen“ verlassen.

Zurück auf der Umfrage-Detailseite kann der Benutzer im Auswahlfeld „- Status ändern -“ den Eintrag „Master“ wählen.

Sobald die Umfrage den Status „Master“ hat, ist sie freigeschaltet.

Nur eine Umfrage kann den Status „Master“ haben.

Wird ein Ticket geschlossen, erhält der Kunde eine E-Mail-Einladung zur Teilnahme an der Umfrage über einen Link in der Einladungs-E-Mail.

## Umfrageergebnisse-Graph

Über das Menü „UMFRAGE“, den Eintrag „Übersicht“, Klick auf eine Umfrage, zu der Kunden bereits Antworten eingereicht haben, und Scrollen nach unten erscheint der „Umfrageergebnisse-Graph“.

Dort wird eine statistische Zusammenfassung der Fragen angezeigt (z. B. Ja/Nein, Optionsfeld und Kontrollkästchen).

Sobald die Umfrage den Status „Master“ hat, ist sie freigeschaltet.

Fragen, deren Antworten als „erforderlich“ konfiguriert wurden, erhalten eine Stimme für jede vom Kunden eingereichte Umfrage.

Fragen, deren Antworten nicht als „erforderlich“ konfiguriert wurden, sind für den Kunden optional. Das bedeutet beispielsweise, dass 200 Kunden die Umfrage eingereicht haben, in der Statistik aber insgesamt nur 10 oder 20 Antworten vorkommen können, wenn Kunden keine Optionsfeld-(Liste)-, Ja/Nein- oder Kontrollkästchen-Antworten ausgewählt oder in einer Textarea-Antwort nichts eingetragen haben.

Statistiken für erforderliche Kontrollkästchen-(Liste)-Fragen haben mindestens einen gesetzten Wert für jede eingereichte Umfrage; durch die Mehrfachauswahl können jedoch mehr Antworten als die Gesamtzahl der eingereichten Umfragen vorliegen. Beispiel: 200 von Kunden eingereichte Umfragen, 350 Antworten auf eine Kontrollkästchen-(Liste)-Frage.

Statistiken für nicht erforderliche Fragen können weniger Stimmen haben als die Gesamtzahl der eingereichten Umfragen (Antwort ist optional).

## Statistikdetails

Über das Menü „UMFRAGE“, den Eintrag „Übersicht“, Klick auf eine Umfrage, zu der Kunden bereits Antworten eingereicht haben, und Auswahl von „Statistikdetails“ erscheint eine Liste mit dem Zeitpunkt, zu dem die Umfrage-Einladung an den Kunden gesendet wurde, dem Zeitpunkt, zu dem der Kunde die ausgefüllte Umfrage eingereicht hat, dem Ticket (anklickbar) und einer Lupe, die die ausgewählten Stimmen dieses Kunden zeigt.

Dort finden sich die vom Kunden gewählten oder eingegebenen Antworten Frage für Frage.

Besonders Textarea-Antworten sind hier von Interesse.

## Umfrage bearbeiten

Sobald eine Umfrage den Status „Master“ hatte, sind die möglichen Änderungen eingeschränkt. Stellen Sie daher sicher, dass insbesondere die Anzahl der Fragen sowie die Anzahl der Antworten korrekt konfiguriert sind, bevor der Status auf Master gesetzt wird.

::: info :::
In einer Umfrage vom Typ „Master“ können keine Fragen mehr hinzugefügt oder gelöscht werden.
:::::::::::

In einer Umfrage vom Typ Master können die allgemeinen Informationen (z. B. Titel, Einleitung, Absender, …), der Fragetext, der Antworttext sowie die Reihenfolge der Antworten geändert werden.

Der Teil „Antwort erforderlich“ einer Frage kann ebenfalls geändert werden; das ist jedoch nur sinnvoll, solange noch keine Kundenumfragen eingereicht wurden.

Wird eine Frage von „Antwort erforderlich“ auf Antwort nicht erforderlich umgestellt, wird die Antwort optional. Die Statistik zu dieser Frage hat dann möglicherweise nicht mehr für jede eingereichte Kundenumfrage eine Antwort.

Wird eine Frage von „Antwort nicht erforderlich“ auf Antwort erforderlich umgestellt, müssen künftige Umfragekunden eine Stimme für diese Frage abgeben; für bereits eingereichte Umfragen werden keine Stimmen ergänzt. Die Statistiken werden dadurch ebenfalls wenig aussagekräftig.

# Technische Implementierungsdetails

Dieses Modul fügt die folgenden Datenbanktabellen hinzu:

- survey, survey_answer
- survey_question
- survey_queue
- survey_request
- survey_vote

Die Tabelle survey enthält die allgemeinen Informationen einer Umfrage sowie die Versandbedingungen.

Die Tabelle survey_answer enthält die Antworten zu Umfragefragen.

Die Tabelle survey_question enthält alle fragenbezogenen Informationen sowie die Angabe, ob eine Antwort erforderlich ist oder nicht.

Die Tabelle survey_queue enthält einen Datensatz für jede Queue, der eine Umfrage zugeordnet ist.

Die Tabelle survey_request enthält einen Datensatz für jede an einen Kunden gesendete Anfrage sowie den Zeitpunkt, zu dem der Kunde die Umfrage eingereicht hat, zu der er eingeladen wurde.

Die Tabelle survey_vote enthält eine Referenz zur zugehörigen Anfrage und Frage sowie die gewählten Antworten.
