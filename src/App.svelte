<script lang="ts">
	import { listen_copy_on_selector } from './utils/copying'

	import Checkbox    from './components/Checkbox.svelte';
	import InputDate   from './components/InputDate.svelte';
	import InputNumber from './components/InputNumber.svelte';
	import InputText   from './components/InputText.svelte';

	import * as fmt from './formtest.js'

	let author_username:   string = '';
	let date_since:        string = '';
	let date_until:        string = '';
	let exact_phrase:      string = '';
	let exclude_word:      string = '';
	let language:          string = '';
	let link_to_domain:    string = '';
	let mention_username:  string = '';
	let reply_to_username: string = '';
	let tweet_id_min:      string = '';
	let tweet_id_max:      string = '';

	let min_faves:    number = 0;
	let min_replies:  number = 0;
	let min_retweets: number = 0;

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

	$: query = () => [
		fmt.with_question(with_question),
		fmt.by_username(author_username),
		fmt.with_videos(with_videos),
		fmt.with_links(with_links),
		fmt.with_hashtags(with_hashtags),
		fmt.with_attached_video(with_attached_video),
		fmt.with_image_or_video(with_image_or_video),
		fmt.date_since(date_since),
		fmt.date_until(date_until),
		fmt.exact_phrase(exact_phrase),
		fmt.exclude_word(exclude_word),
		fmt.images(with_images),
		fmt.social(social),
		fmt.linking_to_news(link_to_news),
		fmt.has_engagement(has_engagement),
		fmt.with_native_retweets(with_native_retweets),
		fmt.language(language),
		fmt.link_to_domain(link_to_domain),
		fmt.mention_username(mention_username),
		fmt.reply_to_username(reply_to_username),
		fmt.from_verified(from_verified),
		fmt.from_unverified(from_unverified),
		fmt.tweet_id_min(tweet_id_min),
		fmt.tweet_id_max(tweet_id_max),
		fmt.min_faves(min_faves),
		fmt.min_replies(min_replies),
		fmt.min_retweets(min_retweets),
	].filter(string => !!string).join(" ")

	document.addEventListener('DOMContentLoaded', function() {
		listen_copy_on_selector('[data-clipboard-target]')
	})


</script>

<div class="section">
	<div class="box">
		<div class="field">
			<label class="label" for="search_result">Resulting search query</label>
			<div class="control">
				<textarea id="search_result" class="textarea" readonly>{query()}</textarea>
			</div>
		</div>

		<button class="button is-rounded" data-clipboard-target="#search_result" disabled={query() === ''} data-original-text='Copy to clipboard'>
			<span class="icon"><i class="far fa-copy"></i></span>
			<span data-role="text">Copy to clipboard</span>
		</button>
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
					<InputDate bind:value={date_since}   label='Tweets created since' placeholder="1970-05-31" />
					<InputDate bind:value={date_until}   label='Tweets created until' placeholder="2021-05-31" />
					<InputText bind:value={tweet_id_min} label='Tweets created since the tweet with ID'  placeholder="1234567890" />
					<InputText bind:value={tweet_id_max} label='Tweets created before the tweet with ID' placeholder="1234567890" />
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
					<Checkbox    bind:checked={has_engagement}       label='Tweets that have engagement' hint='(unclear what it means)' />
					<Checkbox    bind:checked={with_native_retweets} label='Tweets with with native retweets' />
					<InputNumber bind:value={min_faves}              label='Tweets with at least N likes'    min={0} />
					<InputNumber bind:value={min_replies}            label='Tweets with at least N replies'  min={0} />
					<InputNumber bind:value={min_retweets}           label='Tweets with at least N retweets' min={0} />
				</fieldset>

			</div>
		</div>

	</div>
</section>
