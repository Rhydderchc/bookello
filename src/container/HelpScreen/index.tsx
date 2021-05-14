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
			<Text style={styles.heading}>Innvoation</Text>
			<Text style={styles.text}>
				&quot;Bookello is an open source innovation.&quot;With an easier way of attempting to gain knowledge.{' '}
				<Text style={styles.emphasize}>
					Bookello allows you to produce the same amount of anatomy other paid courses provide you
					Read on your own and no-one guides you your all free to learn new things!
				</Text>
			</Text>
			<Text style={styles.text}>
				You want to read a book, right, But want to try it out and understand it in another language? Go over to the settings tap the {' '}
				<Icon name="menu" size={18} color={primaryColor} /> icon in the top right corner of the
				screen and a drawer will slide in. Click the{' '}
				<Icon name="settings" size={18} color={primaryColor} /> icon and you should see the
				settings.
			</Text>
			<Text style={styles.heading}>Translation</Text>
			<Text style={[styles.text, styles.emphasize]}>
				Bookello was made for simple book reading but guess what, you can translate into 3 ways
			</Text>
			<Text style={styles.bullets}>•{'  '} Quick Lookup</Text>
			<Text style={styles.bullets}>•{'  '} Google Translate</Text>
			<Text style={styles.heading}>Quick Lookup</Text>
			<Text style={styles.text}>
				The best way in my opinion would be looking up the translation of a word, straightforward rather than completely monetizing the whole story into 
				different language.
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
