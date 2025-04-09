import fetch from 'node-fetch';

export default async function handler(req, res) {
  const RIOT_API_KEY = 'RGAPI-16c3c08b-132a-49a1-beb5-a1d4f5e8eaff';
  const riotId = 'Messi Of TFT';
  const tagLine = 'KR1';

  try {
    const accountRes = await fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(riotId)}/${tagLine}`, {
      headers: { 'X-Riot-Token': 'RGAPI-16c3c08b-132a-49a1-beb5-a1d4f5e8eaff' }
    });
    const accountData = await accountRes.json();
    const puuid = accountData.puuid;

    const summonerRes = await fetch(`https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${puuid}`, {
      headers: { 'X-Riot-Token': 'RGAPI-16c3c08b-132a-49a1-beb5-a1d4f5e8eaff' }
    });
    const summonerId = (await summonerRes.json()).id;

    const leagueRes = await fetch(`https://kr.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}`, {
      headers: { 'X-Riot-Token': 'RGAPI-16c3c08b-132a-49a1-beb5-a1d4f5e8eaff' }
    });
    const leagueData = await leagueRes.json();
    const tft = leagueData.find(entry => entry.queueType === 'RANKED_TFT');

    res.status(200).json({
      tier: tft?.tier ?? 'Unranked',
      rank: tft?.rank ?? '',
      lp: tft?.leaguePoints ?? 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
