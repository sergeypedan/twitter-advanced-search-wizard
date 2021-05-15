export const with_links           = function(t: boolean): string { return !t ? '' : 'filter:links' }
export const with_videos          = function(t: boolean): string { return !t ? '' : 'filter:videos' }
export const with_hashtags        = function(t: boolean): string { return !t ? '' : 'filter:hashtags' }
export const with_attached_video  = function(t: boolean): string { return !t ? '' : 'filter:native_video' }
export const with_image_or_video  = function(t: boolean): string { return !t ? '' : 'filter:media' }
export const images               = function(t: boolean): string { return !t ? '' : 'filter:images' }
export const from_verified        = function(t: boolean): string { return !t ? '' : 'filter:verified' }
export const from_unverified      = function(t: boolean): string { return !t ? '' : '-filter-verified' }
export const social               = function(t: boolean): string { return !t ? '' : 'filter:social' }
export const has_engagement       = function(t: boolean): string { return !t ? '' : 'filter:has_engagement' }
export const linking_to_news      = function(t: boolean): string { return !t ? '' : 'filter:link_to_news' }
export const with_native_retweets = function(t: boolean): string { return !t ? '' : `filter:nativeretweets` }
export const with_question        = function(t: boolean): string { return !t ? '' : `?` }

export const by_username       = function(str: string): string { return !str ? '' : `from:${str}` }
export const date_since        = function(str: string): string { return !str ? '' : `since:${str}` }
export const date_until        = function(str: string): string { return !str ? '' : `until:${str}` }
export const exact_phrase      = function(str: string): string { return !str ? '' : `"${str}"` }
export const exclude_word      = function(str: string): string { return !str ? '' : `-${str}` }
export const language          = function(str: string): string { return !str ? '' : `lang:${str}` }
export const link_to_domain    = function(str: string): string { return !str ? '' : `url:${str}` }
export const mention_username  = function(str: string): string { return !str ? '' : `@${str}` }
export const reply_to_username = function(str: string): string { return !str ? '' : `to:${str}` }
export const tweet_id_min      = function(str: string): string { return !str ? '' : `since_id:${str}` }
export const tweet_id_max      = function(str: string): string { return !str ? '' : `max_id:${str}` }

export const min_faves    = function(n: number): string { return n <= 0 ? '' : `min_faves:${n}` }
export const min_replies  = function(n: number): string { return n <= 0 ? '' : `min_replies:${n}` }
export const min_retweets = function(n: number): string { return n <= 0 ? '' : `min_retweets:${n}` }
