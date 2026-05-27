import os
import django
import asyncio

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ipl_sim.settings')
django.setup()

from asgiref.sync import sync_to_async
from core.models import Game, Player, GameTeam, Team, GamePlayer
from core.socket_app import _run_auction, _get_pending_player, _set_nomination

@sync_to_async
def setup_game():
    game = Game.objects.create(status=Game.STATUS_AUCTION)
    players = list(Player.objects.all().order_by('?'))
    for p in players:
        GamePlayer.objects.get_or_create(game=game, player=p)
    return game

async def test():
    print("Testing auction loop...")
    game = await setup_game()

    print(f"Testing game {game.id}")
    
    pending = await _get_pending_player(game.id)
    if pending:
        print(f"Found pending player: {pending.player.name}")
        # Test the nomination step
        try:
            print("Trying _set_nomination...")
            res = await _set_nomination(game.id, pending.id, 50)
            print("_set_nomination returned:", res)
        except Exception as e:
            import traceback
            print("_set_nomination FAILED:", type(e), e)
            traceback.print_exc()
    else:
        print("No pending players found in game!")

if __name__ == "__main__":
    asyncio.run(test())
