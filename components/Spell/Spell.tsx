import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface Props {
    spell_name: string
}

interface Spell {
    name: any
}

const Spell = (props: Props) => {
  const [spell, setSpell] = useState<Spell>()

    //get request to dnd api
    const getSpellByName = (spell_name) => {
        fetch(`https://www.dnd5eapi.co/api/spells/${spell_name}`)
            .then(response => response.json())
            .then(response => setSpell(response))
    }

    useEffect(() => {
        getSpellByName(props.spell_name)
    }, [])

  return (
        <View style={styles.spell}>
            <Text>{spell?.name}</Text>
            <Text>{spell?.name}</Text>
        </View>
  )
}

export default Spell

const styles = StyleSheet.create({
    spell: {
        textAlign: 'center',
        height: '100%',
        justifyContent: "flex-start",
        paddingTop: "50px"
    }
})