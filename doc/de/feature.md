# Funktionalität

Dieses Modul ermöglicht das Anlegen neuer Umfragen, das Hinzufügen von
Fragen zu einer angelegten Umfrage, das Freischalten einer Umfrage zum
Versand von Anfragen, die eingeschränkte Bearbeitung bestehender Umfragen
sowie die Anzeige von Statistiken zu eingereichten Umfrageantworten und
der Antworten selbst.

## Copyright
Dieser Text enthält vollständige oder teilweise Textpassagen, die von der OTRS AG erstellt wurden. Das Copyright dieser Passagen liegt daher bei der OTRS AG.

# Verwendung

## Neue Umfrage anlegen

Mit dieser Funktion können Znuny-Benutzer eine neue Umfrage anlegen, indem
sie im Menü „SURVEY“ den Eintrag „New“ wählen.

Neue Umfragen benötigen einen Titel, einen Einleitungstext, eine
Absender-E-Mail-Adresse, einen E-Mail-Betreff, einen E-Mail-Text sowie eine
interne Beschreibung der Umfrage.

Zusätzlich kann die neue Umfrage nur für bestimmte Queues, Ticket-Typen
oder Services angelegt werden. Ist nichts ausgewählt, gilt sie für jede
Queue, jeden Ticket-Typ und jeden Service. Standardmäßig ist die Prüfung
der Versandbedingungen für Ticket-Typen oder Services deaktiviert. Die
Felder werden daher in der Maske nicht angezeigt (Anlege- und
Bearbeitungsmaske einer Umfrage).

Es ist auch möglich, Bedingungen auf Basis von Kundenbenutzer-Attributen
zu definieren, z. B. dass alle Kundenbenutzer mit einem bestimmten Kommentar
keine Umfrage-E-Mails erhalten. Die Attribute sind in den Masken
„AgentSurveyAdd“ und „AgentSurveyEdit“ auswählbar. Jedes Attribut kann
mindestens eine Bedingung haben. Eine Bedingung enthält einen Checkbox-Wert
für die Negation und ein Wertefeld (Eingabetyp Text oder Mehrfachauswahl).

## Fragen hinzufügen

Sobald eine neue Umfrage angelegt ist, kann der Benutzer Fragen zu dieser
Umfrage hinzufügen, indem er in der angezeigten Umfrage auf
„Fragen bearbeiten“ klickt.

Es öffnet sich ein neues Fenster. Dort kann der Benutzer Fragen hinzufügen.

Fünf Fragetypen sind auswählbar:

„YesNo“-Fragen kann ein Benutzer beantworten, indem er „Yes“ oder „No“
aus einer Auswahlliste wählt.

„Radio (List)“-Fragen kann ein Benutzer beantworten, indem er genau
eine der möglichen Antworten auswählt.

„Checkbox (List)“-Fragen kann ein Benutzer beantworten, indem er keine
bis alle aufgeführten Antworten auswählt.

„Textarea“-Fragen kann ein Benutzer mit freiem Text beantworten.

„Net Promoter Score“-Fragen kann ein Benutzer beantworten, indem er
genau einen der möglichen Scores auswählt.

Für jeden Antworttyp kann der Znuny-Benutzer festlegen, ob der Kunde die
Frage beantworten muss oder ob der Kunde die Frage überspringen darf.

Sobald Fragen vom Typ „Radio (List)“, „Checkbox (List)“ oder
„Net Promoter Score“ hinzugefügt wurden, erscheint die Frage in der
Liste „Survey Questions“. Durch Klicken auf die Frage kann der Benutzer
Antworten hinzufügen, die Reihenfolge der Antworten über die Icons „UP“
oder „DOWN“ ändern oder eine Antwort über das Icon „DELETE“ löschen.

Fragen vom Typ „Radio (List)“ und „Net Promoter Score“ müssen
mindestens zwei Antworten haben, um gültig zu sein. Fragen vom Typ
„Checkbox (List)“ müssen mindestens eine Antwort haben, um gültig zu
sein.

## Versand von Umfrageanfragen starten

Wenn der Znuny-Benutzer das Hinzufügen oder Bearbeiten von Fragen und
möglichen Antworten abgeschlossen hat, kann er den Bereich
„Fragen bearbeiten“ über „Close window“ verlassen.

Zurück auf der Umfrage-Detailseite kann der Benutzer unter
„- Change Status -“ den Status „Master“ auswählen.

Sobald die Umfrage den Status „Master“ hat, ist sie freigeschaltet
(live).

Nur eine Umfrage kann den Status „Master“ haben.

Wird ein Ticket geschlossen, erhält der Kunde eine E-Mail-Einladung zur
Teilnahme an der Umfrage mit einem Link in der Einladungs-E-Mail.

## Umfrageergebnis-Grafik

Über das Menü „SURVEY“, den Eintrag „Overview“, Klick auf eine Umfrage,
die Kunden bereits ausgefüllt haben, und Scrollen nach unten ist die
„Survey Results Graph“ sichtbar.

Diese zeigt eine statistische Zusammenfassung der Fragen (z. B. YesNo,
Radio und Checkbox).

Sobald die Umfrage den Status „Master“ hat, ist sie freigeschaltet
(live).

Fragen, deren Antworten als „required“ konfiguriert wurden, erhalten
je eingereichter Kundenumfrage eine Stimme.

Fragen, deren Antworten nicht als „required“ konfiguriert wurden, sind
für den Kunden optional. Das bedeutet z. B., dass 200 Kunden die Umfrage
eingereicht haben, in der Statistik aber insgesamt nur 10 oder 20 Antworten
vorkommen können, wenn Kunden keine der Radio-(List)-, YesNo- oder
Checkbox-Antworten ausgewählt bzw. nichts in eine Textarea-Antwort
eingetragen haben.

Statistiken für erforderliche Checkbox-(List)-Fragen haben für jede
eingereichte Umfrage mindestens einen gesetzten Wert; durch die Möglichkeit
mehrfacher Auswahl können jedoch mehr Antworten als eingereichte Umfragen
vorliegen. Beispiel: 200 von Kunden eingereichte Umfragen, 350 Antworten
auf eine Checkbox-(List)-Frage.

Statistiken für nicht erforderliche Fragen können weniger Stimmen haben
als die Gesamtzahl eingereichter Umfragen (Antwort ist optional).

## Statistikdetails

Über das Menü „SURVEY“, den Eintrag „Overview“, Klick auf eine Umfrage,
die Kunden bereits ausgefüllt haben, und Auswahl von „Statistikdetails“
erscheint eine Liste mit dem Zeitpunkt der Umfrageeinladung an den Kunden,
dem Zeitpunkt der Einreichung der ausgefüllten Umfrage durch den Kunden,
dem Ticket (klickbar) sowie einer Lupe, die die gewählten Stimmen dieses
Kunden anzeigt.

Dort finden sich die Antworten, die der Kunde Frage für Frage gewählt oder
eingegeben hat.

Besonders Textarea-Antworten sind hier von Interesse.

## Umfrage bearbeiten

Sobald eine Umfrage den Status „Master“ hatte, sind die möglichen
Änderungen eingeschränkt. Bitte stellen Sie daher sicher, dass insbesondere
Anzahl der Fragen und Anzahl der Antworten korrekt konfiguriert sind, bevor
der Status auf Master gesetzt wird.

::: info :::
In einer Umfrage vom Typ „Master“ können keine Fragen mehr hinzugefügt
oder gelöscht werden.
:::::::::::

In einer Umfrage vom Typ Master können die allgemeinen Informationen
(z. B. Titel, Einleitung, Absender, …), der Fragetext, der Antworttext
sowie die Reihenfolge der Antworten geändert werden.

Auch der Teil „Antwort erforderlich“ einer Frage kann geändert werden;
das ist jedoch nur sinnvoll, solange noch keine Kundenumfragen eingereicht
wurden.

Wird eine Frage von „Antwort erforderlich“ auf Antwort nicht erforderlich
geändert, wird die Antwort optional. Die Statistik zu dieser Frage muss dann
nicht mehr für jede eingereichte Kundenumfrage eine Antwort enthalten.

Wird eine Frage von „Antwort nicht erforderlich“ auf Antwort erforderlich
geändert, müssen zukünftige Umfragekunden zu dieser Frage abstimmen; für
bereits eingereichte Umfragen werden keine Stimmen nachgetragen. Die
Statistiken werden dadurch ebenfalls wenig aussagekräftig.

# Technische Implementierungsdetails

Dieses Modul fügt die folgenden Datenbanktabellen hinzu:

- survey, survey_answer
- survey_question
- survey_queue
- survey_request
- survey_vote

Die Tabelle survey enthält die allgemeinen Informationen einer Umfrage sowie
die Versandbedingungsinformationen für eine Umfrage.

Die Tabelle survey_answer enthält die Antworten zu Umfragefragen.

Die Tabelle survey_question enthält alle fragenbezogenen Informationen sowie
die Angabe, ob eine Antwort erforderlich ist oder nicht.

Die Tabelle survey_queue enthält einen Datensatz für jede Queue, der eine
Umfrage zugeordnet ist.

Die Tabelle survey_request enthält einen Datensatz für jede an einen Kunden
gesendete Anfrage sowie den Zeitpunkt, zu dem der Kunde die Umfrage
eingereicht hat, zu der er eingeladen wurde.

Die Tabelle survey_vote enthält eine Referenz auf die zugehörige Anfrage und
Frage sowie die gewählten Antworten.
