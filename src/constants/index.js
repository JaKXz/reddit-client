export const CHILDREN_EXPANDED = true;
export const THUMBNAIL_EXPANDED = false;
export const FRONT_PAGE_NAME = '@front-page';

export const VALID_FILTERS = [
  'hot',
  'controversial',
  'new',
  'top',
];

export const SUBREDDITS = createActions('Subreddits', [
  'FETCH_DEFAULT',
  'SAVE_DEFAULT',
  'FETCH_THREADS',
  'SAVE_THREADS',
  'SAVE_THREAD_COMMENTS',
  'FETCH_THREAD_COMMENTS',
  'SAVE_THREAD_COMMENT_TO_CACHE',
  'FETCH_THREAD_MORE_COMMENTS',
  'SAVE_THREAD_COMMENTS_TO_CACHE',
  'TOGGLE_THREAD_COMMENT_EXPAND_CHILDREN',
  'FETCH_THREAD_MORE_ROOT_COMMENTS',
  'DELETE_THREAD_COMMENT',
  'TOGGLE_THREAD_CARD_EXPAND_THUMBNAIL',
  'LAST_FETCHED_THREAD_NAME',
]);

export const FETCHING = '@@fetching';
export const DONE_FETCHING = '@@doneFetching';

function createActions(ns, actions) {
  return Object.freeze(actions.reduce((map, action) => {
    map[action] = `@@${ns}/${action}`;
    return map;
  }, {}));
}

export const LOGIN_USER_PENDING = 'App/LOGIN_USER_PENDING';
export const LOGIN_USER_SUCCESS = 'App/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'App/LOGIN_USER_ERROR';

export const LOGOUT_USER = 'App/LOGOUT_USER';
