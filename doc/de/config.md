# Konfiguration

Das Paket kann über die Systemkonfiguration in der Admin-Oberfläche
konfiguriert werden. Folgende Konfigurationsoptionen stehen zur Verfügung:

## Daemon::SchedulerCronTaskManager::Task###SurveyRequestsDelete.

Navigation: Daemon::SchedulerCronTaskManager::Task.

Löst das Löschen von Ergebnissen aus (einschließlich Abstimmungsdaten und
Anfragen).

## Daemon::SchedulerCronTaskManager::Task###SurveyRequestsSend.

Navigation: Daemon::SchedulerCronTaskManager::Task.

Löst den Versand verzögerter Umfrageanfragen aus.

## Frontend::Module###AgentSurveyAdd.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modulregistrierung zum Anlegen von Umfragen in der
Agentenoberfläche.

## Frontend::Module###AgentSurveyEdit.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modulregistrierung zum Bearbeiten von Umfragen in der
Agentenoberfläche.

## Frontend::Module###AgentSurveyEditQuestions.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modulregistrierung zur Umfrage-Zoom-Ansicht in der
Agentenoberfläche.

## Frontend::Module###AgentSurveyOverview.

Navigation: Frontend::Agent::ModuleRegistration.

Alle Parameter für das Survey-Objekt in der Agentenoberfläche.

## Frontend::Module###AgentSurveyStats.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modulregistrierung für Umfragestatistiken in der
Agentenoberfläche.

## Frontend::Module###AgentSurveyZoom.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modulregistrierung zur Umfrage-Zoom-Ansicht in der
Agentenoberfläche.

## Frontend::Navigation###AgentSurveyAdd###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Registrierung des Hauptmenüeintrags.

## Frontend::Navigation###AgentSurveyEdit###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Registrierung des Hauptmenüeintrags.

## Frontend::Navigation###AgentSurveyOverview###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Registrierung des Hauptmenüeintrags.

## Frontend::Navigation###AgentSurveyStats###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Registrierung des Hauptmenüeintrags.

## Frontend::Navigation###AgentSurveyZoom###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Registrierung des Hauptmenüeintrags.

## Loader::Module::AgentSurveyAdd###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modulregistrierung für die Agentenoberfläche.

## Loader::Module::AgentSurveyEdit###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modulregistrierung für die Agentenoberfläche.

## Loader::Module::AgentSurveyEditQuestions###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modulregistrierung für die Agentenoberfläche.

## Loader::Module::AgentSurveyOverview###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modulregistrierung für die Agentenoberfläche.

## Loader::Module::AgentSurveyStats###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modulregistrierung für die Agentenoberfläche.

## Loader::Module::AgentSurveyZoom###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modulregistrierung für die Agentenoberfläche.

## Loader::Module::PublicSurvey###002-Survey.

Navigation: Frontend::Public::ModuleRegistration.

Loader-Modulregistrierung für die Agentenoberfläche.

## PreferencesGroups###SurveyOverviewSmallPageShown.

Navigation: Frontend::Agent::View::Preferences.

Parameter für die Seiten (auf denen die Umfragen angezeigt werden) der
kleinen Umfrageübersicht.

## PublicFrontend::Module###PublicSurvey.

Navigation: Frontend::Public::ModuleRegistration.

Frontend-Modulregistrierung für das PublicSurvey-Objekt im öffentlichen
Umfragebereich.

## Stats::DynamicObjectRegistration###SurveyList.

Navigation: Core::Stats.

Legt fest, ob das Statistikmodul Umfragelisten erzeugen darf.

## Survey::AmountOfSurveysPer30Days.

Navigation: Core::Survey.

Definiert die maximale Anzahl an Umfragen, die innerhalb von 30 Tagen an
einen Kunden gesendet werden. (0 bedeutet kein Maximum, alle
Umfrageanfragen werden gesendet).

## Survey::CheckSendConditionCustomerFields.

Navigation: Core::Survey.

Definiert die Spalten für die Auswahlliste zum Aufbau von
Versandbedingungen (0 => inaktiv, 1 => aktiv).

## Survey::CheckSendConditionService.

Navigation: Core::Survey.

Aktiviert oder deaktiviert die Prüfung der Versandbedingung für den
Service.

## Survey::CheckSendConditionTicketType.

Navigation: Core::Survey.

Aktiviert oder deaktiviert die Prüfung der Versandbedingung für den
Ticket-Typ.

## Survey::DeletePeriod.

Navigation: Core::Survey.

Ergebnisse, die älter als die konfigurierte Anzahl von Tagen sind, werden
gelöscht. Hinweis: Das Löschen der Ergebnisse erfolgt durch den Znuny
Daemon, nachdem die Einstellung `Task###SurveyRequestsDelete` aktiviert
wurde.

## Survey::Frontend::AgentSurveyOverview###ShowColumns.

Navigation: Frontend::Agent::View::SurveyOverview.

Definiert die angezeigten Spalten in der Umfrageübersicht. Diese Option
hat keinen Einfluss auf die Position der Spalten.

## Survey::Frontend::ChangeSurveyStatusGroups.

Navigation: Frontend::Agent::View::SurveyZoom.

Definiert Gruppen, die den Umfragestatus ändern dürfen. Das Array ist
standardmäßig leer; Agenten aller Gruppen können den Umfragestatus ändern.

## Survey::Frontend::HTMLRichTextHeightDefault.

Navigation: Frontend::Agent::View::SurveyZoom.

Definiert die Standardhöhe für Richtext-Ansichten von SurveyZoom-Elementen.

## Survey::Frontend::HTMLRichTextHeightMax.

Navigation: Frontend::Agent::View::SurveyZoom.

Definiert die maximale Höhe für Richtext-Ansichten von SurveyZoom-Elementen.

## Survey::Frontend::MenuModule###000-Back.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt in der Umfrage-Zoom-Ansicht der Agentenoberfläche einen Menülink zum
Zurückgehen.

## Survey::Frontend::MenuModule###010-EditGeneralInfo.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt in der Zoom-Ansicht der Agentenoberfläche einen Menülink zum
Bearbeiten einer Umfrage.

## Survey::Frontend::MenuModule###020-EditQuestions.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt in der Zoom-Ansicht der Agentenoberfläche einen Menülink zum
Bearbeiten der Umfragefragen.

## Survey::Frontend::MenuModule###030-StatsDetails.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt in der Zoom-Ansicht der Agentenoberfläche einen Menülink zu den
Statistikdetails der Umfrage.

## Survey::Frontend::Overview###Small.

Navigation: Frontend::Agent::SurveyOverview.

Definiert ein Übersichtsmodul zur Anzeige der kleinen Ansicht einer
Umfrageliste.

## Survey::Hook.

Navigation: Core::Survey.

Der Bezeichner für eine Umfrage, z. B. Survey#, MySurvey#. Standard ist
Survey#.

## Survey::NotificationBody.

Navigation: Core::Survey.

Standardtext der Benachrichtigungs-E-Mail an Kunden über eine neue
Umfrage.

## Survey::NotificationRecipientBlacklist.

Navigation: Core::Survey.

Umfragen werden nicht an die konfigurierten E-Mail-Adressen gesendet.

## Survey::NotificationSender.

Navigation: Core::Survey.

Standardabsender der Benachrichtigungs-E-Mail an Kunden über eine neue
Umfrage.

## Survey::NotificationSubject.

Navigation: Core::Survey.

Standardbetreff der Benachrichtigungs-E-Mail an Kunden über eine neue
Umfrage.

## Survey::SendInHoursAfterClose.

Navigation: Core::Survey.

Definiert die Anzahl Stunden, die ein Ticket geschlossen sein muss, bevor
der Versand einer Umfrage ausgelöst wird (0 bedeutet sofortiger Versand
nach dem Schließen). Hinweis: Der verzögerte Umfrageversand erfolgt durch
den Znuny Daemon, nachdem die Einstellung
`Daemon::SchedulerCronTaskManager::Task###SurveyRequestsSend` aktiviert
wurde.

## Survey::SendNoSurveyRegExp.

Navigation: Core::Survey.

Wenn dieser reguläre Ausdruck zutrifft, wird keine Kundenumfrage
gesendet.

## Survey::SendOnlyToRealCustomer.

Navigation: Core::Survey.

Definiert, ob Umfrageanfragen nur an echte Kunden gesendet werden.

## Survey::SendPeriod.

Navigation: Core::Survey.

Anzahl Tage nach dem Versand einer Umfrage-E-Mail, in denen keine neuen
Umfrageanfragen an denselben Kunden gesendet werden. Bei Auswahl von 0
wird die Umfrage-E-Mail immer gesendet.

## Survey::ShowVoteData.

Navigation: Core::Survey.

Aktiviert oder deaktiviert den Bildschirm ShowVoteData in der öffentlichen
Oberfläche, um Daten eines bestimmten Umfrageergebnisses anzuzeigen, wenn
der Kunde versucht, eine Umfrage ein zweites Mal zu beantworten.

## SurveyStats::ShowDelete.

Navigation: Frontend::Agent::View::SurveyStats.

Definiert die Gruppen (rw), die Umfragestatistiken löschen dürfen.

## Ticket::EventModulePost###99-SurveySendRequest.

Navigation: Core::Event::Survey.

Ticket-Event-Modul zum automatischen Versand von Umfrage-E-Mail-Anfragen
an Kunden, wenn ein Ticket geschlossen wird.
