export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070709] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-[var(--color-text-muted)]">
          Это неофициальный фан-сайт. Не аффилирован с YouTube, правообладателями канала или
          третьими сторонами. Все товарные знаки принадлежат их владельцам.
        </p>
        <p className="text-xs text-[var(--color-text-muted)]/80">
          Контент и ссылки-заглушки предназначены для демонстрации интерфейса; замените их
          официальными материалами с разрешения правообладателей.
        </p>
      </div>
    </footer>
  )
}
