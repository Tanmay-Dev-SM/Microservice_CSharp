# ----------- 1. Install dependencies -----------
  FROM node:18-alpine AS deps
  RUN apk add --no-cache libc6-compat
  WORKDIR /app
  
  # Copy package files and install only production deps
  COPY package.json package-lock.json* ./
  RUN npm install --omit=dev
  
  # ----------- 2. Build the Next.js app -----------
  FROM node:18-alpine AS builder
  WORKDIR /app
  
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  
  ENV NEXT_TELEMETRY_DISABLED 1
  
  RUN npm run build
  
  # ----------- 3. Final production image -----------
  FROM node:18-alpine AS runner
  WORKDIR /app
  
  ENV NODE_ENV=production
  ENV NEXT_TELEMETRY_DISABLED=1
  ENV PORT=3000
  
  # Create a non-root user for security
  RUN addgroup --system --gid 1001 nodejs \
   && adduser --system --uid 1001 nextjs
  
  # Copy necessary files
  COPY --from=builder /app/package.json ./package.json
  COPY --from=builder /app/next.config.mjs ./next.config.mjs
  COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
  COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
  
  # ✅ Conditionally copy /public if it exists
  RUN if [ -d /app/public ]; then cp -r /app/public ./public; fi
  
  USER nextjs
  
  EXPOSE 3000
  
  CMD ["node", "server.js"]
  