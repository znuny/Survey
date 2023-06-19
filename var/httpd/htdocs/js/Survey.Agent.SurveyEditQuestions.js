// --
// Copyright (C) 2001-2021 OTRS AG, https://otrs.com/
// Copyright (C) 2021 Znuny GmbH, https://znuny.org/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (GPL). If you
// did not receive this file, see https://www.gnu.org/licenses/gpl-3.0.txt.
// --

"use strict";

var Survey = Survey || {};
Survey.Agent = Survey.Agent || {};

/**
 * @namespace
 * @exports TargetNS as Survey.Agent.SurveyEditQuestions
 * @description
 *      This namespace contains the special module functions for SurveyEditQuestions.
 */
Survey.Agent.SurveyEditQuestions = (function (TargetNS) {
    /**
     * @name Init
     * @memberof Survey.Agent.SurveyEditQuestions
     * @function
     * @description
     *      Init edit survey screen.
     */
    TargetNS.Init = function () {

        $('.QuestionDelete').on('click', function () {
            var $Element = $(this);

            Core.UI.Dialog.ShowContentDialog(
                $('#DeleteQuestionDialogContainer'),
                Core.Language.Translate('Delete'),
                '240px',
                'Center',
                true,
                [
                    {
                        Label: Core.Language.Translate("Cancel"),
                        Type: 'Secondary',
                        Function: function () {
                            Core.UI.Dialog.CloseDialog($('#DeleteQuestionDialog'));
                        }
                    },
                    {
                        Label: Core.Language.Translate("Delete"),
                        Type: 'Warning',
                        Function: function() {
                            $('.Dialog .InnerContent .Center').text(Core.Language.Translate("Delete") + ' ...');
                            $('.Dialog .Content .ContentFooter').remove();

                            window.location = Core.Config.Get('Baselink') + $Element.data('query-string');
                        }
                    },
                ]
            );
            return false;
        });


        $('.AnswerDelete').on('click', function () {
            var $Element = $(this);

            Core.UI.Dialog.ShowContentDialog(
                $('#DeleteAnswerDialogContainer'),
                Core.Language.Translate('Delete'),
                '240px',
                'Center',
                true,
                [
                    {
                        Label: Core.Language.Translate("Cancel"),
                        Type: 'Secondary',
                        Function: function () {
                            Core.UI.Dialog.CloseDialog($('#DeleteAnswerDialog'));
                        }
                    },
                    {
                        Label: Core.Language.Translate("Delete"),
                        Type: 'Warning',
                        Function: function() {
                            $('.Dialog .InnerContent .Center').text(Core.Language.Translate("Delete") + ' ...');
                            $('.Dialog .Content .ContentFooter').remove();

                            window.location = Core.Config.Get('Baselink') + $Element.data('query-string');
                        }
                    },
                ]
            );
            return false;
        });
    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Survey.Agent.SurveyEditQuestions || {}));
