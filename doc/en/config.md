# Configuration

The package can be configured via the System Configuration in the Admin Interface.
The following configuration options are available:

## Daemon::SchedulerCronTaskManager::Task###SurveyRequestsDelete.

Navigation: Daemon::SchedulerCronTaskManager::Task.

Trigger delete results (including vote data and requests).

## Daemon::SchedulerCronTaskManager::Task###SurveyRequestsSend.

Navigation: Daemon::SchedulerCronTaskManager::Task.

Trigger sending delayed survey requests.

## Frontend::Module###AgentSurveyAdd.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend module registration for survey add in the agent interface.

## Frontend::Module###AgentSurveyEdit.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend module registration for survey edit in the agent interface.

## Frontend::Module###AgentSurveyEditQuestions.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend module registration for survey zoom in the agent interface.

## Frontend::Module###AgentSurveyOverview.

Navigation: Frontend::Agent::ModuleRegistration.

All parameters for the Survey object in the agent interface.

## Frontend::Module###AgentSurveyStats.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend module registration for survey stats in the agent interface.

## Frontend::Module###AgentSurveyZoom.

Navigation: Frontend::Agent::ModuleRegistration.

Frontend module registration for survey zoom in the agent interface.

## Frontend::Navigation###AgentSurveyAdd###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Main menu item registration.

## Frontend::Navigation###AgentSurveyEdit###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Main menu item registration.

## Frontend::Navigation###AgentSurveyOverview###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Main menu item registration.

## Frontend::Navigation###AgentSurveyStats###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Main menu item registration.

## Frontend::Navigation###AgentSurveyZoom###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::MainMenu.

Main menu item registration.

## Loader::Module::AgentSurveyAdd###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader module registration for the agent interface.

## Loader::Module::AgentSurveyEdit###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader module registration for the agent interface.

## Loader::Module::AgentSurveyEditQuestions###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader module registration for the agent interface.

## Loader::Module::AgentSurveyOverview###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader module registration for the agent interface.

## Loader::Module::AgentSurveyStats###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader module registration for the agent interface.

## Loader::Module::AgentSurveyZoom###002-Survey.

Navigation: Frontend::Agent::ModuleRegistration::Loader.

Loader module registration for the agent interface.

## Loader::Module::PublicSurvey###002-Survey.

Navigation: Frontend::Public::ModuleRegistration.

Loader module registration for the agent interface.

## PreferencesGroups###SurveyOverviewSmallPageShown.

Navigation: Frontend::Agent::View::Preferences.

Parameters for the pages (in which the surveys are shown) of the small
survey overview.

## PublicFrontend::Module###PublicSurvey.

Navigation: Frontend::Public::ModuleRegistration.

Frontend module registration for the PublicSurvey object in the public
Survey area.

## Stats::DynamicObjectRegistration###SurveyList.

Navigation: Core::Stats.

Determines if the statistics module may generate survey lists.

## Survey::AmountOfSurveysPer30Days.

Navigation: Core::Survey.

Defines maximum amount of surveys that get sent to a customer per 30
days. ( 0 means no maximum, all survey requests will be sent).

## Survey::CheckSendConditionCustomerFields.

Navigation: Core::Survey.

Defines the columns for the dropdown list for building send conditions
(0 => inactive, 1 => active).

## Survey::CheckSendConditionService.

Navigation: Core::Survey.

Enable or disable the send condition check for the service.

## Survey::CheckSendConditionTicketType.

Navigation: Core::Survey.

Enable or disable the send condition check for the ticket type.

## Survey::DeletePeriod.

Navigation: Core::Survey.

Results older than the configured amount of days will be deleted. Note:
delete results done by the OTRS Daemon, prior activation of
`Task###SurveyRequestsDelete` setting.

## Survey::Frontend::AgentSurveyOverview###ShowColumns.

Navigation: Frontend::Agent::View::SurveyOverview.

Defines the shown columns in the survey overview. This option has no
effect on the position of the columns.

## Survey::Frontend::ChangeSurveyStatusGroups.

Navigation: Frontend::Agent::View::SurveyZoom.

Defines groups which have a permission to change survey status. Array is
empty by default and agents from all groups can change survey status.

## Survey::Frontend::HTMLRichTextHeightDefault.

Navigation: Frontend::Agent::View::SurveyZoom.

Defines the default height for Richtext views for SurveyZoom elements.

## Survey::Frontend::HTMLRichTextHeightMax.

Navigation: Frontend::Agent::View::SurveyZoom.

Defines the maximum height for Richtext views for SurveyZoom elements.

## Survey::Frontend::MenuModule###000-Back.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Shows a link in the menu to go back in the survey zoom view of the agent
interface.

## Survey::Frontend::MenuModule###010-EditGeneralInfo.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Shows a link in the menu to edit a survey in its zoom view of the agent
interface.

## Survey::Frontend::MenuModule###020-EditQuestions.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Shows a link in the menu to edit survey questions in its zoom view of
the agent interface.

## Survey::Frontend::MenuModule###030-StatsDetails.

Navigation: Frontend::Agent::View::SurveyZoom::MenuModule.

Shows a link in the menu to zoom into the survey statistics details in
its zoom view of the agent interface.

## Survey::Frontend::Overview###Small.

Navigation: Frontend::Agent::SurveyOverview.

Defines an overview module to show the small view of a survey list.

## Survey::Hook.

Navigation: Core::Survey.

The identifier for a survey, e.g. Survey#, MySurvey#. The default is
Survey#.

## Survey::NotificationBody.

Navigation: Core::Survey.

Default body for the notification email to customers about new survey.

## Survey::NotificationRecipientBlacklist.

Navigation: Core::Survey.

Surveys will not be sent to the configured email addresses.

## Survey::NotificationSender.

Navigation: Core::Survey.

Default sender for the notification email to customers about new survey.

## Survey::NotificationSubject.

Navigation: Core::Survey.

Default subject for the notification email to customers about new
survey.

## Survey::SendInHoursAfterClose.

Navigation: Core::Survey.

Defines the amount in hours a ticket has to be closed to trigger the
sending of a survey, ( 0 means send immediately after close ). Note:
delayed survey sending is done by the OTRS Daemon, prior activation of
`Daemon::SchedulerCronTaskManager::Task###SurveyRequestsSend`
setting.

## Survey::SendNoSurveyRegExp.

Navigation: Core::Survey.

If this regex matches, no customer survey will be sent.

## Survey::SendOnlyToRealCustomer.

Navigation: Core::Survey.

Defines if survey requests will be only send to real customers.

## Survey::SendPeriod.

Navigation: Core::Survey.

Amount of days after sending a survey mail in which no new survey
requests are sent to the same customer. Selecting 0 will always send the
survey mail.

## Survey::ShowVoteData.

Navigation: Core::Survey.

Enable or disable the ShowVoteData screen in the public interface to
show data of a specific survey result when the customer tries to answer
a survey the second time.

## SurveyStats::ShowDelete.

Navigation: Frontend::Agent::View::SurveyStats.

Defines the groups (rw) which can delete survey stats.

## Ticket::EventModulePost###99-SurveySendRequest.

Navigation: Core::Event::Survey.

Ticket event module to send automatically survey email requests to
customers if a ticket is closed.
