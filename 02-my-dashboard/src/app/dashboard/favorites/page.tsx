import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';

export const metadata = {
    title: 'Favoritos',
    description: 'ad minimun'
}


export default async function PokemonsPage() {

  return (

    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons favoritos<small> - Global state</small></span>

      <div className="flex flex-wrap gap-10 items-center justify-center">

        <PokemonGrid pokemons={[]} />

      </div>
    </div>
  );
}
