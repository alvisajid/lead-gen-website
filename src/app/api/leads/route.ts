import { NextRequest, NextResponse } from 'next/server';
import { LeadFormSchema } from '@/lib/leadFormSchema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validation = LeadFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.issues },
        { status: 400 }
      );
    }

    const lead = validation.data;

    // TODO: Integrate with CRM webhook (HubSpot, Zoho, GoHighLevel, etc.)
    // Example stub:
    // const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;
    // const crmResponse = await fetch(crmWebhookUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(lead),
    // });
    // if (!crmResponse.ok) throw new Error('CRM integration failed');

    // TODO: Send confirmation email to lead
    // const emailResponse = await sendEmail({
    //   to: lead.email,
    //   subject: 'Your Consultation Request – Metro Hair Clinic',
    //   template: 'lead-confirmation',
    //   data: lead,
    // });

    // TODO: Fire conversion event to analytics
    // ga4.event('lead_submission', { procedure: lead.procedure, city: lead.city });
    // metaPixel.track('Lead', { phone: lead.phone });

    console.log('Lead received:', lead);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        leadId: `lead_${Date.now()}`, // stub — replace with real DB/CRM ID
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead submission' },
      { status: 500 }
    );
  }
}
