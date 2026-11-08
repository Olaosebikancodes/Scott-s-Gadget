import { WhatsappLogo } from '@phosphor-icons/react/ssr';
import { ListButton } from './list-button';
import { buttonClass } from '@/components/ui/button';
import { generalEnquiry } from '@/lib/whatsapp';

// Thumb-reach actions on phones. Hidden from md up, where the header carries both.
export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-bg/90 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <ListButton variant="dock" />
      <a href={generalEnquiry()} target="_blank" rel="noopener noreferrer" className={buttonClass({ className: 'flex-[1.4]' })}>
        <WhatsappLogo size={18} weight="bold" aria-hidden />
        <span>
          <span className="max-[359px]:hidden">Chat on </span>WhatsApp
        </span>
      </a>
    </div>
  );
}
