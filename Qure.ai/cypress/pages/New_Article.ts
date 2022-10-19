var New_Article =
{
    New_article_btn :() =>
    {
        return  "a[ui-sref='app.editor']"
    },

    Article_title_txtbox  :() =>
    {
        return "input[placeholder='Article Title']"
    },

    Article_about_txtbox :() =>
    {
        return ':nth-child(2) > .form-control'

    },

    Write_your_article_txtbox :() =>
    {
        return "textarea[placeholder='Write your article (in markdown)']"
    },

    Enter_Tags_txtbox : () =>
    {
        return  "input[placeholder='Enter tags']"

    },

    Publish_Article_btn :() =>
    {
        return "button[type='button']"
    },


    Home_icon_btn :() =>
    {
        return '[show-authed="true"] > :nth-child(1) > .nav-link'
    },

    GlobalFeed_btn :() =>
    {
        return '.feed-toggle > .nav > :nth-child(2) > .nav-link'
    },

    Favorite_btn :() =>
    {
        return "button[class='btn btn-sm btn-outline-primary']"
    },


    ReadMore_btn :() =>
    {
        return ':nth-child(1) > .article-preview > .preview-link > span';
    },

    Enter_Comment_txtbox :() =>
    {
        return "textarea[placeholder='Write a comment...']"
    },


    Implementation_Tag :() =>
    {
        return '.sidebar > .tag-list > :nth-child(1)';

    },

    Validate_Implementation_Tag : () =>
    {
        return '[ng-show="$ctrl.listConfig.filters.tag"] > .nav-link'
    },

    Follow_btn :() =>
    {
        return  "div[class='container'] follow-btn[class='ng-isolate-scope']>button"
    }
}

export default New_Article;