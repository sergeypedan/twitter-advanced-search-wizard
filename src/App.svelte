<script lang="ts">
	import Checkbox  from './Checkbox.svelte';
	import InputDate from './InputDate.svelte';
	import InputText from './InputText.svelte';

	let author_username:        string  = '';
	let date_since:             string  = '';
	let date_until:             string  = '';
	let exact_phrase:           string  = '';
	let exclude_word:           string  = '';
	let language:               string  = '';
	let link_to_domain:         string  = '';
	let mention_username:       string  = '';
	let reply_to_username:      string  = '';

	let from_unverified:      boolean = false;
	let from_verified:        boolean = false;
	let has_engagement:       boolean = false;
	let link_to_news:         boolean = false;
	let social:               boolean = false;
	let with_attached_video:  boolean = false;
	let with_hashtags:        boolean = false;
	let with_image_or_video:  boolean = false;
	let with_images:          boolean = false;
	let with_links:           boolean = false;
	let with_native_retweets: boolean = false;
	let with_question:        boolean = false;
	let with_videos:          boolean = false;

	$: fmt_with_links             = function(t: boolean): string { return !t ? '' : 'filter:links' }
	$: fmt_with_videos            = function(t: boolean): string { return !t ? '' : 'filter:videos' }
	$: fmt_with_hashtags          = function(t: boolean): string { return !t ? '' : 'filter:hashtags' }
	$: fmt_with_attached_video    = function(t: boolean): string { return !t ? '' : 'filter:native_video' }
	$: fmt_with_image_or_video    = function(t: boolean): string { return !t ? '' : 'filter:media' }
	$: fmt_images                 = function(t: boolean): string { return !t ? '' : 'filter:images' }
	$: fmt_from_verified          = function(t: boolean): string { return !t ? '' : 'filter:verified' }
	$: fmt_from_unverified        = function(t: boolean): string { return !t ? '' : '-filter-verified' }
	$: fmt_social                 = function(t: boolean): string { return !t ? '' : 'filter:social' }
	$: fmt_has_engagement         = function(t: boolean): string { return !t ? '' : 'filter:has_engagement' }
	$: fmt_linking_to_news        = function(t: boolean): string { return !t ? '' : 'filter:link_to_news' }
	$: fmt_with_native_retweets   = function(t: boolean): string { return !t ? '' : `filter:nativeretweets` }
	$: fmt_with_question          = function(t: boolean): string { return !t ? '' : `?` }

	$: fmt_by_username       = function(term: string): string { return !term ? '' : `from:${term}` }
	$: fmt_date_since        = function(term: string): string { return !term ? '' : `since:${term}` }
	$: fmt_date_until        = function(term: string): string { return !term ? '' : `until:${term}` }
	$: fmt_exact_phrase      = function(term: string): string { return !term ? '' : `"${term}"` }
	$: fmt_exclude_word      = function(term: string): string { return !term ? '' : `-${term}` }
	$: fmt_language          = function(term: string): string { return !term ? '' : `lang:${term}` }
	$: fmt_link_to_domain    = function(term: string): string { return !term ? '' : `url:${term}` }
	$: fmt_mention_username  = function(term: string): string { return !term ? '' : `@${term}` }
	$: fmt_reply_to_username = function(term: string): string { return !term ? '' : `to:${term}` }

	$: query = () => [
		fmt_with_question(with_question),
		fmt_by_username(author_username),
		fmt_with_videos(with_videos),
		fmt_with_links(with_links),
		fmt_with_hashtags(with_hashtags),
		fmt_with_attached_video(with_attached_video),
		fmt_with_image_or_video(with_image_or_video),
		fmt_date_since(date_since),
		fmt_date_until(date_until),
		fmt_exact_phrase(exact_phrase),
		fmt_exclude_word(exclude_word),
		fmt_images(with_images),
		fmt_social(social),
		fmt_linking_to_news(link_to_news),
		fmt_has_engagement(has_engagement),
		fmt_with_native_retweets(with_native_retweets),
		fmt_language(language),
		fmt_link_to_domain(link_to_domain),
		fmt_mention_username(mention_username),
		fmt_reply_to_username(reply_to_username),
		fmt_from_verified(from_verified),
		fmt_from_unverified(from_unverified),
	].filter(string => !!string).join(" ")
</script>

<div class="section">
	<div class="box">
		<div class="field">
			<label class="label" for="search_result">Resulting search query</label>
			<div class="control">
				<textarea id="search_result" class="textarea" readonly>{query()}</textarea>
			</div>
		</div>
	</div>
</div>

<section class="section">
	<div class="columns">
		<div class="column">
			<div class="">

				<fieldset class="box fieldset-1">
					<legend>Accounts</legend>
					<Checkbox  bind:checked={from_verified}   label='Tweets from verified accounts' />
					<Checkbox  bind:checked={from_unverified} label='Tweets from unverified accounts' />
					<InputText bind:value={author_username}   label='Tweets by account'                placeholder="username" />
					<InputText bind:value={reply_to_username} label='Tweets which reply to an account' placeholder="username" />
					<InputText bind:value={mention_username}  label='Tweets mentioning an account'     placeholder="username" />
				</fieldset>


				<fieldset class="box fieldset-1">
					<legend>Text content</legend>
					<InputText bind:value={exact_phrase}    label='Tweets containing an exact phrase' placeholder="I’ll be back" />
					<InputText bind:value={exclude_word}    label='Tweets excluding a word'           placeholder="fake" />
					<InputText bind:value={language}        label='Tweets in a specific language'     placeholder="en" />
					<Checkbox  bind:checked={with_question} label='Tweets containing a question' />
				</fieldset>


				<fieldset class="box fieldset-1">
					<legend>Dates</legend>
					<InputDate bind:value={date_since} label='Tweets created since' placeholder="1970-05-31" />
					<InputDate bind:value={date_until} label='Tweets created until' placeholder="2021-05-31" />
				</fieldset>


				<fieldset class="box fieldset-1">
					<legend>Links from tweets</legend>
					<InputText bind:value={link_to_domain}  label='Tweets linking to a specific website' placeholder="sputniknews.com" />
					<Checkbox  bind:checked={with_links}    label='Tweets containing links to any websites' />
					<Checkbox  bind:checked={link_to_news}  label='Tweets containing links to news websites' />
					<Checkbox  bind:checked={with_hashtags} label='Tweets containing #hashtags' />
					<Checkbox  bind:checked={social}        label='Social?' hint='(unclear what it means)'/>
				</fieldset>


				<fieldset class="box fieldset-1">
					<legend>Media in tweets</legend>
					<Checkbox  bind:checked={with_image_or_video} label='Tweets containing images or video' />
					<Checkbox  bind:checked={with_images}         label='Tweets containing images' />
					<Checkbox  bind:checked={with_videos}         label='Tweets containing videos' />
					<Checkbox  bind:checked={with_attached_video} label='Tweets containing an attached video' />
				</fieldset>


				<fieldset class="box fieldset-1">
					<legend>Other</legend>
					<Checkbox  bind:checked={has_engagement}       label='Tweets that have engagement' hint='(unclear what it means)' />
					<Checkbox  bind:checked={with_native_retweets} label='Tweets with with native retweets' />
				</fieldset>

			</div>
		</div>

	</div>
</section>