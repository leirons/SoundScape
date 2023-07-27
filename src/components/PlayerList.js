import Player from "./Player";


export default function PlayerList() {
    return(

        <div className="player-list">
             <Player
              path="data/resources/sounds/rain.ogg"
              name="Rain"
              icon="data/resources/icons/rain.svg"
             />

            <Player
                path="data/resources/sounds/storm.ogg"
                name="Storm"
                icon="data/resources/icons/storm.svg"
            />
            <Player
                path="data/resources/sounds/birds.ogg"
                name="Birds"
                icon="data/resources/icons/birds.svg"
            />
            <Player
                path="data/resources/sounds/city.ogg"
                name="City"
                icon="data/resources/icons/city.svg"
            />
            <Player
                path="data/resources/sounds/stream.ogg"
                name="Stream"
                icon="data/resources/icons/stream.svg"
            />
            <Player
                path="data/resources/sounds/boat.ogg"
                name="Boat"
                icon="data/resources/icons/boat.svg"
            />
            <Player
                path="data/resources/sounds/coffee-shop.ogg"
                name="Coffe"
                icon="data/resources/icons/coffe.svg"

            />
            <Player
                path="data/resources/sounds/fireplace.ogg"
                name="Fireplace"
                icon="data/resources/icons/fireplace.svg"
            />
            <Player
                path="data/resources/sounds/waves.ogg"
                name="Waves"
                icon="data/resources/icons/waves.svg"
            />
            <Player
                path="data/resources/sounds/white-noise.ogg"
                name="White Noise"
                icon="data/resources/icons/white-noise.svg"
            />
            <Player
                path="data/resources/sounds/summer-night.ogg"
                name="Summer Night"
                icon="data/resources/icons/summer-night.svg"
            />
            <Player
                path="data/resources/sounds/train.ogg"
                name="Train"
                icon="data/resources/icons/train.svg"
            />
                <Player
                    path="data/resources/sounds/pink-noise.ogg"
                    name="Pink Noise"
                    icon="data/resources/icons/pink-noise.svg"
                />

         </div>
    )
}