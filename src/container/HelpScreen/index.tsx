import React from 'react';
import { Text, Image, ScrollView, Dimensions } from 'react-native';
import Icon from '../components/Icon';
import { primaryColor } from '../constants';
import {styles} from './styles'
const quickLookup = require('../../assets/images/quick-lookup.png');
const googleTranslate = require('../../assets/images/google-translate.png');

const { width } = Dimensions.get('window');

function Help() {
	return (
		<ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
			<Text style={styles.heading}>Source & Target</Text>
			<Text style={styles.text}>
				&quot;Source and target languages&quot; might be a confusing terminology to some.{' '}
				<Text style={styles.emphasize}>
					Source is the language that you wish to translate from, while target is the language
					that you would want to translate to.
				</Text>
			</Text>
			<Text style={styles.text}>
				Duofolio uses this setting to translate text for you. You can change your source and
				target languages from the settings menu. To go to settings, simply click the{' '}
				<Icon name="menu" size={18} color={primaryColor} /> icon in the top right corner of the
				screen and a drawer will slide in. Click the{' '}
				<Icon name="settings" size={18} color={primaryColor} /> icon and you should see the
				settings.
			</Text>
			<Text style={styles.heading}>Translation</Text>
			<Text style={[styles.text, styles.emphasize]}>
				There are two ways to look up translation in Duofolio:
			</Text>
			<Text style={styles.bullets}>•{'  '} Quick Lookup</Text>
			<Text style={styles.bullets}>•{'  '} Google Translate</Text>
			<Text style={styles.heading}>Quick Lookup</Text>
			<Text style={styles.text}>
				This is the quickest & most non-disruptive way to see the translation of a word. Simply
				select a word in your book and a menu pops up where you can see its translation and
				listen to its pronunciation. Do note that this method is only meant for single words (it
				has a character limit of 40) and it might not support pronunciation for some languages.
			</Text>
			<Image source={quickLookup} style={styles.screenshot1} />
			<Text style={styles.heading}>Google Translate</Text>
			<Text style={styles.text}>
				This method is meant for the translation of long pieces of text. It involves a two-step
				process.
			</Text>
			<Text style={styles.text}>
				<Text style={styles.emphasize}>1.</Text> First select the text that you want to
				translate (If quick lookup menu pops up, simply dismiss it)
			</Text>
			<Text style={styles.text}>
				<Text style={styles.emphasize}>2.</Text> After selecting the text, click the{' '}
				<Icon name="g-translate" type="material" color={primaryColor} size={18} /> icon in the
				top right corner. This will open a Google Translate screen with the selected text
				already filled in.
			</Text>
			<Image source={googleTranslate} style={styles.screenshot2} />
		</ScrollView>
	);
}

export default Help;
