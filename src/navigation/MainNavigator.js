import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MapMasterScreen from '../screens/MapMasterScreen';
import MapPlayerScreen from '../screens/MapPlayerScreen';
import PlayerCharacterScreen from '../screens/PlayerCharacterScreen';
import PlayerRulesScreen from '../screens/PlayerRulesScreen';
import PlayerSpellsScreen from '../screens/PlayerSpellsScreen';
import PlayerItemsScreen from '../screens/PlayerItemsScreen';
import MasterRulesScreen from '../screens/MasterRulesScreen';
import MasterSpellsScreen from '../screens/MasterSpellsScreen';
import MasterItemsScreen from '../screens/MasterItemsScreen';
import MasterMonstersScreen from '../screens/MasterMonstersScreen';
import InitiativeTrackerScreen from '../screens/InitiativeTrackerScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MapMaster" component={MapMasterScreen} options={{title: 'Mappa Master'}} />
      <Stack.Screen name="MapPlayer" component={MapPlayerScreen} options={{title: 'Mappa Giocatore'}} />
      <Stack.Screen name="PlayerCharacter" component={PlayerCharacterScreen} options={{title: 'Scheda Personaggio'}} />
      <Stack.Screen name="PlayerRules" component={PlayerRulesScreen} options={{title: 'Regole'}} />
      <Stack.Screen name="PlayerSpells" component={PlayerSpellsScreen} options={{title: 'Incantesimi'}} />
      <Stack.Screen name="PlayerItems" component={PlayerItemsScreen} options={{title: 'Oggetti'}} />
      <Stack.Screen name="MasterRules" component={MasterRulesScreen} options={{title: 'Regole Master'}} />
      <Stack.Screen name="MasterSpells" component={MasterSpellsScreen} options={{title: 'Incantesimi Master'}} />
      <Stack.Screen name="MasterItems" component={MasterItemsScreen} options={{title: 'Oggetti Master'}} />
      <Stack.Screen name="MasterMonsters" component={MasterMonstersScreen} options={{title: 'Mostri'}} />
      <Stack.Screen name="InitiativeTracker" component={InitiativeTrackerScreen} options={{title: 'Iniziativa'}} />
    </Stack.Navigator>
  );
}
