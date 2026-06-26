// ===== Конфігураційний файл даних сайту =====
// Змінюйте лише цей файл для додавання/видалення соцмереж та проєктів.

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string; // emoji або шлях до іконки
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
}

// ===== Соціальні мережі =====
export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/vortexabra',
    description: 'Наш канал у Telegram — новини, обговорення, спільнота',
    icon: '✈️',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://disflip.com/guild/1509667234237382806',
    description: 'Сервер Discord — спілкування, події, розробка',
    icon: '💬',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@Vortexabra',
    description: 'YouTube-канал — трейлери, геймплей, туторіали',
    icon: '▶️',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@vortex_abra',
    description: 'TikTok — короткі відео, меми, закулісся',
    icon: '🎵',
  },
];

// ===== Проєкти =====
export const projects: Project[] = [
  {
    id: 'scriptforge',
    name: 'ScriptForge',
    description:
      'Інструмент для написання та редагування Roblox-скриптів зі зручним інтерфейсом.',
    url: 'https://veazerrdev.github.io/ScriptForge/',
  },
  {
    id: 'survive-duolingo-owl',
    name: 'Survive the Duolingo Owl',
    description:
      'Хоррор-гра, де ви тікаєте від розлюченої сови Duolingo. Виживайте, ховайтеся та не втратьте свій стрік!',
    url: 'https://www.roblox.com/games/77856461499278/Survive-the-Duolingo-Owl',
  },
];
