# Konfiguration

Das Paket kann über die Systemkonfiguration in der Admin-Oberfläche konfiguriert werden.
Folgende Konfigurationsoptionen stehen zur Verfügung:

## Daemon::SchedulerCronTaskManager::Task###SurveyRequestsDelete.

Navigation: Daemon::SchedulerCronTaskManager::Task.

Auslöser zum Löschen von Ergebnissen (inklusive Abstimmungsdaten und Anfragen).

## Daemon::SchedulerCronTaskManager::Task###SurveyRequestsSend.

Navigation: Daemon::SchedulerCronTaskManager::Task.

Auslöser zum Senden von verzögerten Umfrage-Anfragen.

## Frontend::Module###AgentSurveyAdd.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modul-Registrierung für das Hinzufügen einer Umfrage im Agenten-Interface.

## Frontend::Module###AgentSurveyEdit.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modul-Registrierung für die Umfragebearbeitung im Agenten-Interface.

## Frontend::Module###AgentSurveyEditQuestions.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modul-Registrierung für die Umfrage-Detailansicht im Agenten-Interface.

## Frontend::Module###AgentSurveyOverview.

Navigation: Frontend::Agent::ModuleRegistration.

Alle Parameter für das Umfrage-Objekt im Agenten-Interface.

## Frontend::Module###AgentSurveyStats.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modul-Registrierung für die Umfragestatistik im Agenten-Interface.

## Frontend::Module###AgentSurveyZoom.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend-Modul-Registrierung für die Umfrage-Detailansicht im Agenten-Interface.

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

Loader-Modul-Registrierung für das Agenten-Interface.

## Loader::Module::AgentSurveyEdit###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modul-Registrierung für das Agenten-Interface.

## Loader::Module::AgentSurveyEditQuestions###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modul-Registrierung für das Agenten-Interface.

## Loader::Module::AgentSurveyOverview###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modul-Registrierung für das Agenten-Interface.

## Loader::Module::AgentSurveyStats###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modul-Registrierung für das Agenten-Interface.

## Loader::Module::AgentSurveyZoom###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader-Modul-Registrierung für das Agenten-Interface.

## Loader::Module::PublicSurvey###002-Survey.

Navigation: Frontend::Public::ModuleRegistration.

Loader-Modul-Registrierung für das öffentliche Interface.

## PreferencesGroups###SurveyOverviewSmallPageShown.

Navigation: Frontend::Agent::View::Preferences.

Parameter für die Seiten (auf denen die Umfragen angezeigt werden) der kleinen Umfrageübersicht.

## PublicFrontend::Module###PublicSurvey.

Navigation: Frontend::Public::ModuleRegistration.

Frontend-Modul-Registrierung für das PublicSurvey-Objekt im öffentlichen Umfragebereich.

## Stats::DynamicObjectRegistration###SurveyList.

Navigation: Core::Stats.

Bestimmt, ob das Statistik-Modul Umfragelisten erzeugen kann.

## Survey::AmountOfSurveysPer30Days.

Navigation: Core::Survey.

Definiert die maximale Anzahl von Umfragen, die ein Kunde innerhalb von 30 Tagen zugesandt bekommt. (0 steht für kein Maximum, alle Umfrage-Anfragen werden versandt).

## Survey::CheckSendConditionCustomerFields.

Navigation: Core::Survey.

Definiert die Spalten für die Dropdown-Liste zum Aufbau von Versandbedingungen (0 => inaktiv, 1 => aktiv).

## Survey::CheckSendConditionService.

Navigation: Core::Survey.

Aktivieren oder Deaktivieren der Prüfung der Versandbedingungen für den Service.

## Survey::CheckSendConditionTicketType.

Navigation: Core::Survey.

Aktivieren oder Deaktivieren der Prüfung der Versandbedingungen für den Ticket-Typ.

## Survey::DeletePeriod.

Navigation: Core::Survey.

Ergebnisse, die älter als die konfigurierte Anzahl von Tagen sind, werden gelöscht. Hinweis: Das Löschen der Ergebnisse erfolgt durch den Znuny Daemon, zuvor muss die Einstellung `Task###SurveyRequestsDelete` aktiviert werden.

## Survey::Frontend::AgentSurveyOverview###ShowColumns.

Navigation: Frontend::Agent::View::SurveyOverview.

Definiert die angezeigten Spalten der Umfrage-Übersicht. Diese Option hat keine Auswirkung auf die Position der Spalten.

## Survey::Frontend::ChangeSurveyStatusGroups.

Navigation: Frontend::Agent::View::SurveyZoom.

Definiert Gruppen, die den Umfragestatus ändern dürfen. Das Array ist standardmäßig leer und Agenten aus allen Gruppen können den Status der Umfrage ändern.

## Survey::Frontend::HTMLRichTextHeightDefault.

Navigation: Frontend::Agent::View::SurveyZoom.

Definiert die Standardhöhe von Richtext-Ansichten für SurveyZoom-Elemente.

## Survey::Frontend::HTMLRichTextHeightMax.

Navigation: Frontend::Agent::View::SurveyZoom.

Definiert die maximale Höhe von Richtext-Ansichten für SurveyZoom-Elemente.

## Survey::Frontend::MenuModule###000-Back.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt einen Link im Menü der Umfrage-Detailansicht im Agenten-Interface an, um zurückzugehen.

## Survey::Frontend::MenuModule###010-EditGeneralInfo.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt einen Link im Menü der Detailansicht im Agenten-Interface an, der es ermöglicht, eine Umfrage zu bearbeiten.

## Survey::Frontend::MenuModule###020-EditQuestions.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt einen Link im Menü der Detailansicht im Agenten-Interface an, der es ermöglicht, die Fragen einer Umfrage zu bearbeiten.

## Survey::Frontend::MenuModule###030-StatsDetails.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Zeigt einen Link im Menü der Detailansicht im Agenten-Interface an, mit dem die Statistikdetails einer Umfrage geöffnet werden können.

## Survey::Frontend::Overview###Small.

Navigation: Frontend::Agent::SurveyOverview.

Definiert ein Übersichtsmodul für die kleine Ansicht einer Umfrageliste.

## Survey::Hook.

Navigation: Core::Survey.

Die eindeutige Bezeichnung für eine Umfrage, z. B. Survey#, MySurvey#. Standard ist Survey#.

## Survey::NotificationBody.

Navigation: Core::Survey.

Voreingestellter Text für die Benachrichtigungs-E-Mail an Kunden über neue Umfragen.

## Survey::NotificationRecipientBlacklist.

Navigation: Core::Survey.

Umfragen werden nicht an die konfigurierten E-Mail-Adressen gesendet.

## Survey::NotificationSender.

Navigation: Core::Survey.

Voreingestellter Absender für die Benachrichtigungs-E-Mail an Kunden über neue Umfragen.

## Survey::NotificationSubject.

Navigation: Core::Survey.

Voreingestellter Betreff für die Benachrichtigungs-E-Mail an Kunden über neue Umfragen.

## Survey::SendInHoursAfterClose.

Navigation: Core::Survey.

Definiert die Anzahl an Stunden, für die ein Ticket geschlossen sein muss, um den Versand einer Umfrage auszulösen (0 bedeutet, unmittelbar nach dem Schließen senden). Hinweis: Der verzögerte Umfrageversand erfolgt durch den Znuny Daemon, zuvor muss die Einstellung `Daemon::SchedulerCronTaskManager::Task###SurveyRequestsSend` aktiviert werden.

## Survey::SendNoSurveyRegExp.

Navigation: Core::Survey.

Wenn dieser reguläre Ausdruck zutrifft, wird keine Kundenumfrage versendet.

## Survey::SendOnlyToRealCustomer.

Navigation: Core::Survey.

Definiert, ob Umfrage-Anfragen nur an reale Kunden gesendet werden.

## Survey::SendPeriod.

Navigation: Core::Survey.

Anzahl an Tagen nach dem Versand einer Umfrage-E-Mail, in denen keine neuen Umfrage-Anfragen an denselben Kunden gesendet werden. Bei Auswahl von 0 wird die Umfrage-E-Mail immer gesendet.

## Survey::ShowVoteData.

Navigation: Core::Survey.

Aktivieren oder Deaktivieren der ShowVoteData-Ansicht in der öffentlichen Oberfläche, um Daten eines bestimmten Umfrageergebnisses anzuzeigen, wenn der Kunde versucht, eine Umfrage ein zweites Mal zu beantworten.

## SurveyStats::ShowDelete.

Navigation: Frontend::Agent::View::SurveyStats.

Definiert die Gruppen (rw), die Umfragestatistiken löschen können.

## Ticket::EventModulePost###99-SurveySendRequest.

Navigation: Core::Event::Survey.

Ticket-Event-Modul, um automatisch Umfrage-E-Mail-Anfragen an Kunden zu senden, wenn ein Ticket geschlossen wird.
