import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import PoppinsText from '../components/PoppinsText';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import InputText from '../components/InputText';
import {Tab} from '@rneui/themed';
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Voice from '@react-native-community/voice';

export default function FreightChatV2({navigation}) {
  const [searchText, setSearchText] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [speech, setSpeech] = React.useState('');

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const botMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: 'Here are current orders from Atlanta to Tampa:',
      createdAt: new Date(),
      user: {_id: 2},
    };
    const botMessage2 = {
      _id: Math.round(Math.random() * 1000000),
      text: 'ATFL, (24 foot, departing: 8/4/23, arriving: 8/5/23) Payout:$1,200',
      createdAt: new Date(),
      user: {_id: 2},
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, botMessage),
    );
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, botMessage2),
    );
  }, []);

  const onSpeechStart = () => {};

  const onSpeechEnd = () => {};

  const onSpeechError = () => {};

  const onSpeechResults = e => {
    console.log(e.value[0]);
    setSpeech(e.value[0]);
  };

  const onSpeechPartialResults = e => {
    setSpeech(e.value[0]);
  };


  return (
    <View style={styles.container}>
      {/* <Image /> */}

      <Image source={require('../assets/ep1.png')} style={styles.avatar} />
      <PoppinsText bold={true} style={styles.title}>
        Freight Logbook
      </PoppinsText>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        text={speech}
        onInputTextChanged={setSpeech}
        user={{_id: 1}}
        // renderComposer={renderComposer}
        placeholder="Type your message here..."
        // renderBubble={this.renderBubble}
        // renderInputToolbar={this.renderInputToolbar}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        textInputStyle={{borderRadius: 10}}
        alwaysShowSend
        scrollToBottom
      />
    </View>
  );
}


const renderInputToolbar = props => {
  return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
};

const renderSend = props => {
  const [isRecording, setIsRecording] = React.useState(false);
  const stopRecording = async () => {
    await Voice.stop();
    setIsRecording(!isRecording);
  };
  const startListening = () => {
    // You can set the locale to any language you want it to recognize, I am using Nigerian English.
    Voice.start('en-NG');
  };
  return (
    <Send {...props}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            isRecording ? stopRecording() : startListening();
          }}>
          <FontAwesome
            type="font-awesome"
            name="microphone"
            style={{
              marginBottom: 10,
              marginRight: 10,
              padding:5,
              transform: [{rotateY: '180deg'}],
            }}
            size={25}
            color="blue"
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>

        <FontAwesome
          type="font-awesome"
          name="send"
          style={{marginBottom: 10, marginRight: 10,padding:5,}}
          size={25}
          color="orange"
          tvParallaxProperties={undefined}
        />
      </View>
    </Send>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: Styles.colors.darkblue,
    backgroundColor: 'white',
    // padding: 20,
    paddingBottom: 100,
  },
  avatar: {
    width: '100%',
    position: 'absolute',
  },
  inputToolbar: {
    marginLeft: 15,
    marginRight: 15,
    // borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 25
},
  title: {
    color: Styles.colors.gray500,
    fontSize: 27,
    // lineHeight: 32,
    marginBottom: Styles.spacing.padding,
    // alignSelf: 'center',
    marginTop: 70,
    marginLeft: 80,
    marginRight: 50,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatHeader: {
    height: 60,
    backgroundColor: '#5BC0EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: '#5BC0EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  sendIcon: {
    color: '#fff',
    fontSize: 24,
  },
});
