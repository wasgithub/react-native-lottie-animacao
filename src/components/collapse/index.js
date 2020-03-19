import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity, FlatList } from 'react-native';
import { Avatar } from 'react-native-paper';


const Collapse = props => {

  const { data } = props
  return (
      <View style={styles.containerAreaLista}>
          <FlatList
              data={data}
              ItemSeparatorComponent={renderSeparator}
              renderItem={({item, index}) => <Item data={item}
                                                      style={styles.containerCarteirasList}
                                                  key={index}/>}
          />
      </View>

  )
}

const Item = props => {

  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])

  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded)
  }

  const { data } = props

  return (
    <View style={styles.container}>
      <View style={styles.btnTextHolder}>
        <TouchableOpacity activeOpacity={0.8} onPress={changeLayout} style={styles.Btn}>
            <View style={styles.containerItem}>
                <View style={styles.itemIcon}>
                  <Avatar.Icon size={24} icon="folder" />
                </View>
                <View style={styles.itemShort}>
                    <View><Text style={styles.collapseTitle}>{data.remetente}</Text></View>
                    <View><Text>{`Data: ${data.data}`}</Text></View>
                    <View><Text>{`Aluno: ${data.aluno}`}</Text></View>
                    <View><Text>{`Turma: ${data.turma}`}</Text></View>
                </View>

            </View>
        </TouchableOpacity>
        <View style={{ height: expanded ? null : 0, overflow: 'hidden', backgroundColor: "white" }}>
          <Text style={styles.text}>
            {data.mensagem}
          </Text>
        </View>
      </View>
    </View>
  );
}

const renderSeparator = () => {
  return (
    <View
      style={styles.renderSeparator}
    />
  );
};

Collapse.proptypes = {
  data: PropTypes.array
}

Collapse.defaultProps = {
  data: []
}

export default Collapse


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },

  itemIcon: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "black"
  },

  collapseTitle: {
    fontWeight: "bold",
    fontSize: 16
  },

  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },

  containerItem: {
      flexDirection: "row",
      alignItems: "center",
      alignItems: "stretch"
  },

  itemShort: {
      flex: 3,
      paddingLeft: 16
  },

  btnTextHolder: {
    borderWidth: 1,
    borderRadius: 3
  },

  Btn: {
    padding: 10,
    backgroundColor: 'white'
  },

  renderSeparator: {
    height: 5,
  }
});
