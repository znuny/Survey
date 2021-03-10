# Functionality

This Module enables you to create new Surveys, add questions to a
created Survey, set a Survey live in order to send requests, modify
existing Surveys to a certain extent, and view statistics of submitted
Survey answers as well as the answers themselves.

## Copyright
This text contains complete or partial text passages which have been created by OTRS AG. The copyright of these passages therefore belongs to OTRS AG.

# Usage

## Create new Survey

This feature lets OTRS users create new Survey by selecting the menu
"SURVEY" and choosing "New".

New Surveys require a title, an introduction text, a sender mail
address, a mail subject, a mail body and an internal description of the
Survey.

Additionally the new Survey can be created for just some queues, ticket
types or services. If none are selected, it will be valid for every
queue, ticket type annd service. As default the send condition check for
ticket types or services are disabled. So the fields aren\'t displayed
in the mask (new and edit mask for a survey).

It is also possible to define conditions based on customer user
attributes, e.g. all customer users with a specified comment would not
get any survey emails. The attributes are selectable in the masks
"AgentSurveyAdd" and "AgentSurveyEdit". Each attribute could have at
least one condition. A condition contains a checkbox value for negation
and a value field (input type text or multiple select).

## Add Questions

As soon as a new Survey is created, the user can add questions to this
Survey by clicking "Edit Questions" in the displayed Survey.

A new window will pop up. In there the user can add questions.

Five types of questions are selectable. These are:

"YesNo" questions a user can answer by selecting "Yes" or "No" of
a drop down select.

"Radio (List)" questions a user can answer by selecting exactly one
and just one of the possible answers.

"Checkbox (List)" questions a user can answer by selecting none to all
listed answers.

"Textarea" questions a user can write answers by typing regular text.

"Net Promoter Score" questions a user can answer by selecting exactly
one and just one of the possible scores.

For each answer type the OTRS user can choose if he wants a customer to
be required to answer this question or if a customer can ignore the
question.

As soon as questions of type "Radio (List)", "Checkbox (List)" or
"Net Promoter Score" got added, the question will be shown in the
"Survey Questions"-List. By clicking on the question the user can add
answers, change the answer order by clicking the "UP" or "DOWN"
icon, or delete the answer by clicking the "DELETE" icon.

Questions of type "Radio (List)" and "Net Promoter Score" needs to
have at least two answers to be valid. Furthermore, questions of type
"Checkbox (List)" needs to have at least one answer to be valid.

## Start sending Survey requests

When the OTRS user has finished adding or modifying questions and
possible answers, he can leave the "Edit Questions" area by clicking
"Close window".

Back on the Survey detail page the user can select "Master" from the
"- Change Status -" select.

As soon as the Survey has the state "Master" the Survey is set live.

Only one Survey can have the state "Master".

If a Ticket got closed, the customer gets an E-Mail invitation to fill
the Survey by clicking a link inside the invitation E-Mail.

## Survey Results Graph

By selecting "SURVEY" from the menu, choosing "Overview", clicking
on a a Survey that customers already submitted and scrolling down, you
can see the "Survey Results Graph".

This displays the statistically a summary of questions (e.g. YesNo,
Radio and Checkbox).

As soon as the Survey has the state "Master" the Survey is set live.

Questions where answers were configured as "required" will have one
vote for each customer submitted Survey.

Questions where answers were not configured as "required" are optional
for the customer. This means that for example 200 customers submitted
the Survey but in the statistic in total only 10 or 20 answers may
occur, if customers did not select any of the Radio (List), YesNo or
checkbox answers or haven't put anything in a textarea answer.

Statistics for required Checkbox (List) questions will have at least one
checked value for every submitted Survey but due to it's nature of been
multiple clickable there may be more answers than the total amount of
submitted Surveys. Example: 200 Surveys submitted by customers, 350
answers on one Checkbox (List) question.

Statistics for not required questions may have less votes than the total
amount of submitted Surveys (answer is optional).

## Statistics Details

By selecting "SURVEY" from the menu, choosing "Overview", clicking
on a Survey that customers already submitted and choosing "Stats
Details" you can see a list containing the time the Survey invitation
was sent to the customer, the time the customer submitted his filled
Survey, the Ticket (clickable) and a magnifying glass that shows the
selected votes for this customer.

In there you can find the answers the customer chose or typed in
question by question.

Especially Textarea answers are of interest in here.

## Modifying Survey

As soon as a Survey had the Status "Master" the possible modifications
are limited. So please make sure to have especially the amount of
questions as well as the amount of answers correctly configured before
changing it\'s status to Master.

::: info :::
In a Survey of type "Master" you can not add or delete questions any
more.
:::::::::::

In a Survey of type Master you can change the general info (e.g. Title,
Introduction, Sender,...), the question text, the answer text, as well
as the order of the answers.

You can change the "Answer Required" part of a question too, but this
may just make sense as long as there are no submitted customer Surveys.

Changing a "Answer Required" Question to answer not required makes the
answer optional, so the statistic for this question may not have an
answer for each submitted customer Survey any more.

Changing a "Answer not Required" Question to answer required will
require future Survey customers to give a vote for this question, but
will not add votes for already submitted Surveys. So statistics will
render rather useless too.

# Technical Implementation Details

This module adds the following database tables:

- survey, survey_answer
- survey_question
- survey_queue
- survey_request
- survey_vote

The survey table holds the general information of a survey and the send
condition information for a survey.

The survey_answer holds the answers for a survey questions.

The survey_question holds all question related information as well as if
an answer is required or not.

The survey_queue table holds a record for each queue a survey is added.

The survey_request table holds a record for each request sent to a
customer, as well as the time, a customer has submitted the survey he
was invited to.

The survey_vote table holds a reference to the corresponding request and
question as well as the chosen answers.
