import Image from "next/image";
import {
  BusinessIcon,
  CalendarIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../icons";
import { environment } from "@/lib/environment";
import { formatPhone } from "@/utils/format-string.util";
import { formatDateBirthday } from "@/utils/format-date.util";
import { ProfileContactItem } from "./profile-contact-item";
import { ProfileSocialIcon } from "./profile-social-icon";
import { calculateYearsFrom } from "@/utils/calculate-years.util";

export const ProfileDataCard = () => {
  return (
    <div className="rounded-2xl border border-divider bg-content1 p-6">
      <div className="flex items-center gap-4">
        <figure className="w-20 h-20 rounded-xl overflow-hidden bg-content2">
          <Image
            src="/images/avatar.png"
            alt={environment.PERSONAL_ENVIRONMENT.NAME}
            width={80}
            height={80}
            className="object-cover"
          />
        </figure>

        <div>
          <h1 className="text-lg font-semibold">
            {environment.PERSONAL_ENVIRONMENT.NAME}
          </h1>
          <p className="text-sm text-foreground-500">
            {environment.PERSONAL_ENVIRONMENT.ROLE}
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-divider pt-6 space-y-4">
        <ProfileContactItem
          icon={<MailIcon fontSize={18} />}
          label="Email"
          value={
            <a
              href={`mailto:${environment.PERSONAL_ENVIRONMENT.EMAIL}`}
              className="hover:text-primary transition"
            >
              {environment.PERSONAL_ENVIRONMENT.EMAIL}
            </a>
          }
        />

        <ProfileContactItem
          icon={<PhoneIcon fontSize={18} />}
          label="Telefone"
          value={formatPhone(environment.PERSONAL_ENVIRONMENT.PHONE)}
        />

        <ProfileContactItem
          icon={<CalendarIcon fontSize={18} />}
          label="Data de Nascimento"
          value={formatDateBirthday(environment.PERSONAL_ENVIRONMENT.BIRTHDAY)}
        />

        <ProfileContactItem
          icon={<BusinessIcon fontSize={18} />}
          label="Experiencia"
          value={`+ ${calculateYearsFrom(
            new Date(environment.PERSONAL_ENVIRONMENT.EXPERIENCE_START_DATE)
          )} Anos`}
        />

        <ProfileContactItem
          icon={<LocationIcon fontSize={18} />}
          label="Localização"
          value={environment.PERSONAL_ENVIRONMENT.LOCATION}
        />
      </div>

      <div className="mt-6 border-t border-divider pt-4">
        <ul className="flex gap-3 justify-center">
          <ProfileSocialIcon
            icon={<GithubIcon fontSize={18} />}
            href={`https://github.com/${environment.SOCIAL.GITHUB_USERNAME}`}
          />
          <ProfileSocialIcon
            icon={<LinkedinIcon fontSize={18} />}
            href={`https://linkedin.com/in/${environment.SOCIAL.LINKEDIN_USERNAME}`}
          />
          <ProfileSocialIcon
            icon={<WhatsappIcon fontSize={18} />}
            href={`https://wa.me/${environment.PERSONAL_ENVIRONMENT.PHONE}?text=Olá%20Eduardo,%20vim%20pelo%20seu%20portfólio`}
          />
        </ul>
      </div>
    </div>
  );
};
